
import Search from '../../ui/search/search';
import FeatureCard, { IFeature } from '../../ui/featureCard/featureCard';
import ButtonLink from '../../ui/button/button-link/buttonLink';

import { useGetProductsByTitle } from '../../../redux/slices/productsSlice';

import features from '../../../mocks/features';

import style from './FeaturesList.module.scss'
import Loading from '../../ui/loading/loading';
import { useEffect, useState } from 'react';

// список товаров

function FeaturesList () {

  const { data, error, isLoading } = useGetProductsByTitle();


  //const {productsList, setProductsList } = useState([]);

  //useEffect (()=> {data ? setProductsList(data.products): setProductsList(productsList)}, [data])

  console.log(data);

  return (
    <section id='catalog' className={style.features}>
      <div className={style.contentWrap}>
        <h2 className={style.title}>Catalog</h2>
        <Search></Search>
        <ul className={style.gallery}>
          {/*! потом взять значение  features из контекста, плюс проверить налиличе и длину больше 0 !*/}
          {error ? (
        <>Please, lets try again</>
      ) : isLoading ? (
        <Loading></Loading>
      ) : data ? (
        data.products.map((feature : IFeature) => <FeatureCard {...feature} key={`${feature.id}${feature.title}`}></FeatureCard>) 
      ) : null}
        </ul>
        <div className={style.btnWrap}>
          <ButtonLink><span className={style.btnText}>Show more</span></ButtonLink>
        </div>
      </div>
    </section>
  )
}

export default FeaturesList;
