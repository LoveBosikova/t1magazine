import { useEffect, useState } from 'react';

import Search from '../../ui/search/search';
import FeatureCard, { IFeature } from '../../ui/featureCard/featureCard';
import ButtonLink from '../../ui/button/button-link/buttonLink';
import Loading from '../../ui/loading/loading';

import { useGetProductsByTitle } from '../../../redux/slices/productsSlice';

import style from './FeaturesList.module.scss'

// список товаров

function FeaturesList () {

  // q        - запрос из поисковой строки 
  // skip     - сколько продуктов уже загружено и нужно пропустить при следующем запросе продуктов
  // products - список всех подгруженных продуктов 
  const [ q, setQ ] = useState('');
  const [ skip, setSkip ] = useState(0);
  const [ products, setProducts ] = useState<IFeature[]>([])

  const { data, error, isLoading } = useGetProductsByTitle({q, skip});

  // Делает запрос на подгрузку новых 12 продуктов, увеличивая показатель skip
  function addProducts(q: string, skip: number) {
    setSkip(skip + 12);
    const newSkip = skip + 12;
    useGetProductsByTitle({q, skip: newSkip});
  }

  //Добавляем подгрузившиеся товары в массив продуктов
  useEffect (()=> { if ( data ) setProducts([...products, ...data.products])}, [data])
  
  return (
    <section id='catalog' className={style.features}>
      <div className={style.contentWrap}>
        <h2 className={style.title}>Catalog</h2>
        <Search></Search>
        <ul className={style.gallery}>
          {error ? (
            <>Please, lets try again</>
          ) : isLoading ? (
            <Loading></Loading>
          ) : data ? (
            products.map((feature : IFeature) => <FeatureCard {...feature} key={`${feature.id}${feature.title}`}></FeatureCard>) 
          ) : null}
        </ul>
        <div className={style.btnWrap}>
          <ButtonLink disabled={isLoading} addProducts={addProducts} q={q} skip={skip}><span className={style.btnText}>Show more</span></ButtonLink>
        </div>
      </div>
    </section>
  )
}

export default FeaturesList;
