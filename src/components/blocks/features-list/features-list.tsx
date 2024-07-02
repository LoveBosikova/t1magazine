
import Search from '../../ui/search/search';

import FeatureCard, { IFeature } from '../../ui/featureCard/featureCard';

import style from './FeaturesList.module.scss'
import features from '../../../mocks/features';

// список товаров

function FeaturesList () {
  return (
    <section className={style.features}>
      <div className={style.contentWrap}>
        {/* // title */}
        <h2 className={style.title}>Catalog</h2>

        {/* // search */}
        <Search></Search>

        {/* // gallery  */}

        <div className={style.gallery}>
          {/* потом взять значение  features из контекста*/}
          {features.map((feature : IFeature) => <FeatureCard {...feature} key={`${feature.id}${feature.title}`}></FeatureCard>)}

        </div>

        {/* // btn */}

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
