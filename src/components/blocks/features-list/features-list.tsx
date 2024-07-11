import { useEffect, useState } from 'react';

import Search from '../../ui/search/search';
import FeatureCard, { IFeature } from '../../ui/featureCard/featureCard';
import ButtonLink from '../../ui/button/button-link/buttonLink';
import Loading from '../../ui/loading/loading';

import { useGetProductsByTitle } from '../../../redux/slices/productsSlice';

import useDebounce from '../../../utils/debounce';

import style from './FeaturesList.module.scss'

// список товаров

function FeaturesList () {

  // q        - запрос из поисковой строки 
  // skip     - сколько продуктов уже загружено и нужно пропустить при следующем запросе продуктов
  // products - список всех подгруженных продуктов 
  const [ q, setQ ] = useState('');
  const [ skip, setSkip ] = useState(0);
  const [ products, setProducts ] = useState<IFeature[]>([])
  const [ isFullyLoaded, setIsFullyLoaded ] = useState(false);

  const { data, error, isLoading } = useGetProductsByTitle({q, skip});

  console.log(data);

  function debounce(func, delay) {
    let timeoutId;
    
    return function executedFunction(...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
  }

  const debouncedSearch = debounce(() => {
    // Выполнение поисковых операций
    useGetProductsByTitle({q, skip})
  }, 1000);

  // Хендлер для поисковой строки
  // eсли меняется поисковой запрос, skip обнуляется и предыдущие товары обнуляются - они становятся неактуальны
  const onChangeQSearchByTitle = (event: any) => {
    setProducts([]);
    setQ(event.target.value);
    useGetProductsByTitle({q: event.target.value, skip: 0})
  };

  

  // Делает запрос на подгрузку новых 12 продуктов, увеличивая показатель skip
  function addProducts(q: string, skip: number) {
    setSkip(skip + 12);
    const newSkip = skip + 12;
    debouncedSearch(q, newSkip);
  }

  //Добавляем подгрузившиеся товары в массив продуктов
  useEffect (()=> { if ( data ) setProducts([...products, ...data.products])}, [data])

  return (
    <section id='catalog' className={style.features}>
      <div className={style.contentWrap}>
        <h2 className={style.title}>Catalog</h2>
        <Search q={q} onChange={onChangeQSearchByTitle}></Search>
        <ul className={style.gallery}>
          {error ? (
            <>Please, lets try again</>
          ) : isLoading ? (
            <Loading></Loading>
          ) : data ? (
            products.map((feature : IFeature) => <FeatureCard {...feature} key={`${feature.id}${feature.title}`}></FeatureCard>) 
          ) : null}
        </ul>
        {error ? (
            <></>
          ) : isLoading ? (
            <></>
          ) : data ? (
          <div className={style.btnWrap}>
            {/* Если максимальное количество товаров из поска равно тем, что уже есть в корзине, или идёт подгрузка товаров, то устанавливаем disabled на нопку  */}
            <ButtonLink disabled={isLoading || data.total === products.length} addProducts={addProducts} q={q} skip={skip}><span className={style.btnText}>Show more</span></ButtonLink>
          </div>
          ) : null}
      </div>
    </section>
  )
}

export default FeaturesList;
