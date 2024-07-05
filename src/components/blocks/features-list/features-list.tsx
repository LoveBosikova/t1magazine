
import Search from '../../ui/search/search';
import FeatureCard, { IFeature } from '../../ui/featureCard/featureCard';
import ButtonLink from '../../ui/button/button-link/buttonLink';

import features from '../../../mocks/features';

import style from './FeaturesList.module.scss'

// список товаров

function FeaturesList () {
  return (
    <section className={style.features}>
      <div className={style.contentWrap}>
        <h2 className={style.title}>Catalog</h2>
        <Search></Search>
        <div className={style.gallery}>
          {/*! потом взять значение  features из контекста, плюс проверить налиличе и длину больше 0 !*/}
          {features.map((feature : IFeature) => <FeatureCard {...feature} key={`${feature.id}${feature.title}`}></FeatureCard>)}
        </div>
        <div className={style.btnWrap}>
          <ButtonLink><span className={style.btnText}>Show more</span></ButtonLink>
        </div>
      </div>
    </section>
  )
}

// function FeaturesList({ features }) {
//   return features && features.length ? (
//     <section className="features">
//       <Title as="h2">Почему фермерские продукты лучше?</Title>
//       <ul className="features__list">
//         {features.map((feature) => (
//           <li className="features__item" key={feature.id}>
//             <FeatureCard {...feature} />
//           </li>
//         ))}
//       </ul>
//       <Button link="/buy">Купить</Button>
//     </section>
//   ) : null;
// }

export default FeaturesList;
