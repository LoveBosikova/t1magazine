import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import AddOrCount from '../addOrCount/addOrCount';

import { increase, decrease, updateCart } from '../../../redux/slices/cartSlice';

import { Link } from 'react-router-dom';

import { IIncrease, IDecrease } from '../addOrCount/addOrCount';

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

export interface IFeatureCardProps {
    id: number,
    title: string,
    price: number,
    quantity: number,
    total: number,
    discountPercentage: number,
    discountedTotal: number,
    owner: string | undefined,
    thumbnail: string | undefined,
    products: IFeature[]
}

function FeatureCard ( props : IFeatureCardProps ) {

    const dispatch = useDispatch();

    // количество товара в корзине
    const [number, setNumber] = useState<number>(0);

    const { cartId, cartItems } = useSelector((state: any) => state.cart);

    // отслеживаем готовность экшенов убавления-прибавления товаров
    const [ isCartActionLoading, setIsCartActionLoading ] = useState(false);

    // проверяем, есть ли такой айди товара в корзине. Если есть, устанавливаем значение количества товара на значение из корзины
    useEffect(() => {
        if (cartItems.filter((cartItem :IFeature)=> cartItem.id === props.id).length > 0) {
            const productInCart = cartItems.filter((cartItem :IFeature)=> cartItem.id === props.id);
            setNumber(productInCart.map((product: IFeature)=> product.quantity))
        }
    }, [cartItems])

    // функция для увеличения товаров в корзине
    function increaseCount ({id, quantity} : IIncrease) {
        setIsCartActionLoading(true)
        setNumber(quantity + 1)
        dispatch(increase(id))
        // обновляем массив продуктов с учётом нового количества товара
        // Два сценария - если продукт уже есть в корзине и если его нет
        console.log(cartItems.find((cartItem : IFeature)=> cartItem.id === id));

        let newProducts;

        if (cartItems.find((cartItem : IFeature)=> cartItem.id === id)) {
            // если товар с таким айди уже есть в корзине, перебираем корзину и увеличивваем количество нужного продукта 
            newProducts = cartItems.map((cartItem: IFeature) => { 
                if (cartItem.id === id){
                    const newCartItem ={...cartItem}
                    newCartItem.quantity = cartItem.quantity + 1;
                    return newCartItem;
                } else if (cartItem.id !== id) {
                    return cartItem;
                }})
        } else if (!cartItems.find((cartItem : IFeature)=> cartItem.id === id)) {
            // если такого товара еще нет, добавляем его в массив
            const newProduct = props.products.filter((product: IFeature) => product.id === id);
            newProducts = [...cartItems, ...newProduct];
        }
        // Отправляем пут-запрос на сервер с новым набором продуктов
        // в ответ получаем новую корзину, кладём её в стор корзины
        fetch(`https://dummyjson.com/carts/${cartId}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
            merge: false,
            products: newProducts
            })
        })
        .then(res => res.json())
        .then(newCart =>{
            dispatch(updateCart(newCart))
            setIsCartActionLoading(false)
        });
    }

    // функция для уменьшения товаров в корзине
    function decreaseCount ({id, quantity} : IDecrease) {
        setIsCartActionLoading(true)
        setNumber(quantity - 1)
        dispatch(decrease(id))
        // обновляем массив продуктов с учётом нового количества товара
        const newProducts = cartItems.map((cartItem: IFeature) => { 
            if (cartItem.id == id){
                const newCartItem ={...cartItem}
                newCartItem.quantity = cartItem.quantity - 1;
                return newCartItem;
            } else if (cartItem.id !== id) {
                return cartItem;
            }})
        // Отправляем пут-запрос на сервер с новым набором продуктов
        // в ответ получаем новую корзину, кладём её в стор корзины
        fetch(`https://dummyjson.com/carts/${cartId}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
            merge: false,
            products: newProducts
            })
        })
        .then(res => res.json())
        .then(newCart => {
            dispatch(updateCart(newCart))
            setIsCartActionLoading(false)
        });
    }


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
                        <AddOrCount 
                        num={number} 
                        id={props.id} 
                        increaseOnClick={increaseCount} 
                        decreaseOnClick={decreaseCount}
                        isLoading={isCartActionLoading}>
                        </AddOrCount>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default FeatureCard;