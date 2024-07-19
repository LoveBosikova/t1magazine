import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useGetProductById } from '../../../redux/slices/productsSlice';

import Rating from '../../ui/rating/rating';
import AddOrCount from '../../ui/addOrCount/addOrCount';
import ErrorPage from '../404/404';
import Loading from '../../ui/loading/loading';

import { increase, decrease, updateCart } from '../../../redux/slices/cartSlice';

import type { IIncrease, IDecrease } from '../../ui/addOrCount/addOrCount';

// import { IIncrease, IDecrease } from '../addOrCount/addOrCount';

import { IFeature } from '../../ui/featureCard/featureCard';

import style from './ProductPage.module.scss';
import { RootState } from '../../../redux/store';

function ProductPage ({ products } : { products: IFeature[]} ) {
    let location = useLocation();
    const dispatch = useDispatch();

    // Определяем айди товара
    const [ id, setId ] = useState(location.pathname.split('/')[2])
    // Отправляем запрос на бек
    const { data, error, isLoading } = useGetProductById(id);

    // Смотрим, есть ли товар в корзине и устанавливаем количество товара в корзине
    const { cartId, cartItems } = useSelector((state: RootState) => state.cart);
    const countInCart = cartItems.filter((cartItem: IFeature) => +cartItem.id == +id) 
    const [ number, setNumber ] = useState(countInCart.length > 0 ? countInCart[0].quantity : 0);

    // Устанавливаем главную картинку
    const [ mainImg, setMainImg ] = useState('');

    // отслеживаем готовность экшенов убавления-прибавления товаров
    const [ isCartActionLoading, setIsCartActionLoading ] = useState(false);

    // отслеживаем возможность прибавить товар
    const [ isMaxAmount, setIsMaxAmount ] = useState(false);

    function setMain(src: string){
        setMainImg(src)
    }

    // функция для увеличения товаров в корзине
    function increaseCount ({id, quantity} : IIncrease) {
        setIsCartActionLoading(true)
        setNumber(+quantity + 1)
        dispatch(increase(id))

        // обновляем массив продуктов с учётом нового количества товара
        // Сначала смотрим,  а можем ли мы увеличить продукт - есть ли он еще в стоке
        let newProducts;
        const curProduct = products.find((propduct: IFeature) => propduct.id === id);
        if (curProduct&&curProduct.stock&&curProduct.stock == (+quantity + 1)) {
            setIsMaxAmount(true)
        }

        // Потом есть два сценария - если продукт уже есть в корзине и если его нет
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
            const newProduct = products.filter((product: IFeature) => product.id === id);
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

        // если с уменьшением товара можно будет прибавить товар, убираем значение isMaxAmount - 
        // так разблолкируется кнопка добавления этого товара
        const curProduct = products.find((propduct: IFeature) => propduct.id === id);
        if (curProduct&&curProduct.stock&&curProduct.stock > (+quantity - 1)) {
            setIsMaxAmount(false)
        }

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
    <>
        {error ? (
            <></>
        ) : isLoading ? (
            <></>
        ) : data ? (
            <Helmet>
            <title>{data.title} | Goods4you</title>
            <meta name='description' content={`${data.title} from Goods4you`} />
        </Helmet>
        ) : null}
        <div className={style.page}>
            <section className={style.pageWrap}>
            {error ? (
            <ErrorPage></ErrorPage>
            ) : isLoading ? (
            <Loading></Loading>
            ) : data ? (
            <>
                <div className={style.imagesWrap}>
                    {data.images.length === 1 ? <picture className={style.bigImg}>
                        <img src={data.images[0]} alt={data.title} />
                    </picture> :
                    <>
                    {!mainImg ? setMain(data.images[0]) : null}
                    <picture className={style.bigImg}>
                        <img src={mainImg} alt="" />
                    </picture>
                    <div className={style.galleryWrap}>
                        {
                            data.images.map((img: string) => {
                                return (
                                    <picture className={style.littleImgWrap} onClick={()=>{setMainImg(img)}}>
                                        {/* Рамка появляется только у того изображения, которое на "главной" фотографии */}
                                        {mainImg == img ? <div className={style.shooseImgBorder}></div> : <></>}
                                        <img className={style.galleryPhoto} src={img} alt={data.title} />
                                    </picture>
                                )
                            })
                        }
                    </div>
                    </>
                    }
                </div>
                <div className={style.contentWrap}>
                    <h1 className={style.title}>{data.title}</h1>
                        <div className={style.info}>
                            <fieldset className={style.ratingWrap}>
                                <legend className={style.hidden}>Rate this product</legend>
                                <Rating num={Math.round(data.rating)}></Rating>
                            </fieldset>
                            <p className={style.goodsClass}>{data.tags.map((tag: string) => <span>{tag}</span>)}</p>
                        </div>
                        { data.stock && (<div className={style.stockWrap}>
                            <p className={style.stockText}>In Stock - Only {data.stock} left!</p>
                        </div>)}
                        <p className={style.descriptionText}>
                        { data.description }
                        </p>
                        { data.warrantyInformation && <p className={style.add}>{data.warrantyInformation}</p>}
                        { data.shippingInformation && <p className={style.add}>{data.shippingInformation}</p>}
                        <div className={style.byeWrap}>
                            <div className={style.priceWrap}>
                                {/* Ценв со скидкой - если скидка больше нуля, считаем итоговую цену. Если скидка ноль - выдаем первоначальную */}
                                <span className={style.finalPrice}>{data.discountPercentage > 0 ? ((data.price/100)*(100-data.discountPercentage)).toFixed(2) : data.price}$</span>
                                {/* Цена без скидки */}
                                <span className={style.startedPrice}>{data.price}$</span>
                            </div>
                            <p className={style.discountWrap}>
                                <span className={style.discountText}>Your discount:</span>
                                <span className={style.discountNumber}>{data.discountPercentage}%</span>
                            </p>
                            <div className={style.countPanelWrap}>
                            <AddOrCount 
                                num={number} 
                                id={+id} 
                                increaseOnClick={increaseCount} 
                                decreaseOnClick={decreaseCount}
                                isLoading={isCartActionLoading}
                                isMaxAmount={isMaxAmount}>
                            </AddOrCount>
                            </div> 
                        </div>
                </div>
            </>
        ) : null}
            </section>
        </div>
    </>
    )
}

export default ProductPage