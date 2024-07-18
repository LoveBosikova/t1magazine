import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import ButtonDelete from '../../ui/button/button-delete/buttonDelete';
import AddOrCount from '../addOrCount/addOrCount';

import type { IFeature } from '../featureCard/featureCard';

import { increase, decrease, deleteItem, updateCart } from '../../../redux/slices/cartSlice';
import { IIncrease, IDecrease, IDelete } from '../addOrCount/addOrCount';
import { RootState } from '../../../redux/store';

import style from './CartItem.module.scss';

function CartItem ( {
    id,
    title, 
    price, 
    quantity, 
    thumbnail
} : IFeature) {

    const dispatch = useDispatch();

    const { cartId, cartItems } = useSelector((state: RootState) => state.cart);

    const [ number, setNumber ] = useState<number>(quantity);

    // отслеживаем готовность экшенов убавления-прибавления товаров
    const [ isCartActionLoading, setIsCartActionLoading ] = useState(false);

    // функция для увеличения товаров в корзине
    function increaseCount ({id, quantity} : IIncrease) {
        setIsCartActionLoading(true)
        setNumber(quantity + 1)
        dispatch(increase(id))
        // обновляем массив продуктов с учётом нового количества товара
        const newProducts = cartItems.map((cartItem: IFeature) => { 
            if (cartItem.id == id){
                const newCartItem ={...cartItem}
                newCartItem.quantity = cartItem.quantity + 1;
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

    // функция для удаления товара из корзины
    function deleteProduct ({id} : IDelete) {
        setIsCartActionLoading(true)
        setNumber(0)
        dispatch(deleteItem(id))
        // обновляем массив продуктов с учётом нового количества товара
        const newProducts = cartItems.map((cartItem: IFeature) => { 
            if (cartItem.id == id){
                const newCartItem ={...cartItem}
                newCartItem.quantity = 0;
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
        <li className={style.item}>
            <picture className={number < 1 ? style.imgWrapTransparent : style.imgWrap}>
                <img className={style.itemImg} src={thumbnail} alt='' />
            </picture>
            <div className={number < 1 ? style.infoWrapTransparent : style.infoWrap}>
                <Link  to={`/product/${id}`} className={style.info}>{title}</Link>
                <p className={style.price}>{price} $</p>
            </div>
            <div className={number < 1 ? style.countWrapEmpty : style.countWrap}>
                <AddOrCount 
                num={number} 
                id={id} 
                increaseOnClick={increaseCount} 
                decreaseOnClick={decreaseCount}
                isLoading={isCartActionLoading}>
                </AddOrCount>
            </div>
            {number < 1 ? <></> : <div className={style.deleteWrap}><ButtonDelete id={id} deleteOnClick={deleteProduct}></ButtonDelete></div>}
        </li>
    )
}

export default CartItem;