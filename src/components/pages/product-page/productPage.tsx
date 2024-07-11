import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import shoesImg from '../../../assets/whiteBoots.jpg';
import Rating from '../../ui/rating/rating';
import CountPanel from '../../ui/countPanel/countPanel';

import { useGetProductById } from '../../../redux/slices/productsSlice';

import style from './ProductPage.module.scss';
import ErrorPage from '../404/404';
import Loading from '../../ui/loading/loading';

function ProductPage () {
    let location = useLocation();

    const [ number, setNumber ] = useState(0);
    // Определяем айди товара
    const [ id, setId ] = useState(location.pathname.split('/')[2])
    // Отправляем запрос на бек
    const { data, error, isLoading } = useGetProductById(id);

    console.log(data);

    //
    const [ mainImg, setMainImg ] = useState('');

    function setMain(src: string){
        setMainImg(src)
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
                            {number > 0 ? <div className={style.countPanelWrap}><CountPanel num={number} setNumber={setNumber}></CountPanel></div> : <button className={style.btnAdd} onClick={() => {setNumber(number + 1)}}><p className={style.btnAddText}>Add to cart</p></button>}
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