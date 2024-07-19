import { Helmet } from 'react-helmet-async';

import { useDispatch, useSelector } from 'react-redux';

import type { IFeature } from '../../ui/featureCard/featureCard';

import CartItem from '../../ui/cartItem/cartItem';
import style from './CartPage.module.scss';
import Loading from '../../ui/loading/loading';

import type { RootState } from '../../../redux/store';
import type { Dispatch } from '@reduxjs/toolkit';
import type { SetStateAction } from 'react';

function CartPage ({products} : { products: IFeature[] }) {

    const { cartItems, isLoading, amount, total, discountedTotal } = useSelector((state: RootState) => state.cart);

    // console.log(cartItems);

    return (
    <>
        <Helmet>
            <title>My cart | Goods4you</title>
            <meta name='description' content='Cart with your goods from Goods4you' />
        </Helmet>
        <section className={style.pageWrap}>
            <div className={style.contentWrap}>
                <h1 className={style.title}>My cart</h1>
                <div className={style.cartWrap}>
                    <ul className={style.items}>
                        {/* Если загружена корзина, проверяем, есть ли в ней что-либо. Если нет ничего - No items, иначе - список покупок */}
                        {isLoading ? <Loading></Loading> 
                        : !cartItems || cartItems.length === 0 ? <span>No items</span> 
                        : cartItems.map((cartItem : IFeature) => <CartItem key={cartItem.id} {...cartItem} products={products} ></CartItem>)}
                    </ul>
                    <div className={style.totalsWrap}>
                        <div className={style.totalWrap}>
                            <p className={style.totalText}>Total count</p>
                            <p className={style.totalCount}>{amount ? amount : `0`} items</p>
                        </div>
                        <div className={style.priceBeforeDiscount}>
                            <p className={style.priceBeforeText}>Price without discount</p>
                            <p className={style.priceBeforeCount}>{total ? total.toFixed(2) : `0`} $</p>
                        </div>
                        <div className={style.totalPrice}>
                            <p className={style.totalPriceText}>Total price</p>
                            <p className={style.totalPriceCount}>{discountedTotal.toFixed(2)} $</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
    )
}

export default CartPage;