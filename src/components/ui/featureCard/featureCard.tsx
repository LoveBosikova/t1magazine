import shoesImg from '../../../assets/shoes.jpg';
import ButtonCart from '../button/buttonCart';

import style from './FeatureCard.module.scss';
export interface IFeature {
    id: number | string | undefined,
    title: string | undefined,
    owner: string | undefined,
    image: string | undefined,
    price: number | string | undefined,
}

function FeatureCard ( props : IFeature) {
    return (
        <div className={style.card}>
            <div className={style.contentWrap}>
                <picture>
                    <img src={shoesImg} alt={props.title} className={style.img}/>
                </picture>
                <div className={style.descriptionWrap}>
                    <div className={style.textWrap}>
                        <h3 className={style.title}>{props.title}</h3>
                        <p className={style.price}>{`${props.price} $`}</p>
                    </div>
                    <ButtonCart></ButtonCart>
                </div>
            </div>
        </div>
    )
}

export default FeatureCard;