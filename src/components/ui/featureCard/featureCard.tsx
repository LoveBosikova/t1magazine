import shoesImg from '../../../assets/shoes.jpg';
import ButtonCart from '../button/button-cart/buttonCart';

import { Link } from 'react-router-dom';

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
                <picture className={style.imgWrap}>
                    <img src={shoesImg} alt={props.title} className={style.img}/>
                    <Link className={style.link} to={`/product/${props.id}`}>
                        <span className={style.LinkText}>Show details</span>
                    </Link>
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