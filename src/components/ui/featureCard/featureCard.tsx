import { useState } from 'react';

import shoesImg from '../../../assets/shoes.jpg';
import AddOrCount from '../addOrCount/addOrCount';

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

    const [number, setNumber] = useState<number>(0);

    return (
        <li className={style.card}>
            <div className={style.contentWrap}>
                <picture className={style.imgWrap}>
                    <img src={shoesImg} alt={props.title} className={style.img}/>
                    <Link className={style.link} to={`/product/${props.id}`}>
                        <span className={style.LinkText}>Show details</span>
                    </Link>
                </picture>
                <div className={style.descriptionWrap}>
                    <div className={number == 0 ? style.textWrapMax : style.textWrapMin}>
                        <h3 className={style.title}>{props.title}</h3>
                        <p className={style.price}>{`${props.price} $`}</p>
                    </div>
                    <div className={style.addOrCountWrap}>
                        <AddOrCount num={number} setNumber={setNumber}></AddOrCount>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default FeatureCard;