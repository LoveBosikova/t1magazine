import { useState } from 'react';

import shoesImg from '../../../assets/shoes.jpg';
import AddOrCount from '../addOrCount/addOrCount';

import { Link } from 'react-router-dom';

import style from './FeatureCard.module.scss';


        //   {
        //     "id": 144,
        //     "title": "Cricket Helmet",
        //     "price": 44.99,
        //     "quantity": 4,
        //     "total": 179.96,
        //     "discountPercentage": 11.47,
        //     "discountedTotal": 159.32,
        //     "thumbnail": "https://cdn.dummyjson.com/products/images/sports-accessories/Cricket%20Helmet/thumbnail.png"
        //   },

export interface IFeature {
    id: number | string | undefined,
    title: string | undefined,
    price: number | string | undefined,
    quantity: number,
    total: number,
    discountPercentage: number,
    discountedTotal: number,
    owner: string | undefined,
    thumbnail: string | undefined,
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