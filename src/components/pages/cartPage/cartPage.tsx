import { Helmet } from 'react-helmet-async';

import { useDispatch, useSelector } from 'react-redux';

import type { IFeature } from '../../ui/featureCard/featureCard';

import CartItem from '../../ui/cartItem/cartItem';
import style from './CartPage.module.scss';

function CartPage () {

    const dispatch = useDispatch();

    const { cartItems, isLoading, amount, total } = useSelector((state) => state.cart);

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
                        { cartItems.map(({ id, title, price, quantity, thumbnail } : IFeature) => <CartItem id={id} title={title} price={price} quantity={quantity} thumbnail={thumbnail}></CartItem>)}
                    </ul>
                    <div className={style.totalsWrap}>
                        <div className={style.totalWrap}>
                            <p className={style.totalText}>Total count</p>
                            <p className={style.totalCount}>3 items</p>
                        </div>
                        <div className={style.priceBeforeDiscount}>
                            <p className={style.priceBeforeText}>Price without discount</p>
                            <p className={style.priceBeforeCount}>700$</p>
                        </div>
                        <div className={style.totalPrice}>
                            <p className={style.totalPriceText}>Total price</p>
                            <p className={style.totalPriceCount}>590$</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
    )
}

export default CartPage;