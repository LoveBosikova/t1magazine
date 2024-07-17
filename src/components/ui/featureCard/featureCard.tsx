import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import AddOrCount from '../addOrCount/addOrCount';

import { Link } from 'react-router-dom';

import style from './FeatureCard.module.scss';

export interface IFeature {
    id: number,
    title: string,
    price: number,
    quantity: number,
    total: number,
    discountPercentage: number,
    discountedTotal: number,
    owner: string | undefined,
    thumbnail: string | undefined,
}

function FeatureCard ( props : IFeature) {
    // количество товара в корзине
    const [number, setNumber] = useState<number>(0);

    const { cartItems } = useSelector((state: any) => state.cart);

    // проверяем, есть ли такой айди товара в корзине. Если есть, устанавливаем значение количества товара на значение из корзины
    useEffect(() => {
        if (cartItems.filter((cartItem :IFeature)=> cartItem.id === props.id).length > 0) {
            const productInCart = cartItems.filter((cartItem :IFeature)=> cartItem.id === props.id);
            setNumber(productInCart.map((product: IFeature)=> product.quantity))
        }
    }, [cartItems])

    return (
        <li className={style.card}>
            <div className={style.contentWrap}>
                <picture className={style.imgWrap}>
                    <img src={props.thumbnail} alt={props.title} className={style.img}/>
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