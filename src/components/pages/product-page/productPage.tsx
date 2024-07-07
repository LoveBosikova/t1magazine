import { useState } from 'react';
import { Helmet } from 'react-helmet-async';

import shoesImg from '../../../assets/whiteBoots.jpg';
import Rating from '../../ui/rating/rating';
import CountPanel from '../../ui/countPanel/countPanel';

import style from './ProductPage.module.scss';

function ProductPage () {

    const [number, setNumber] = useState(0)

    return (
    <>
        <Helmet>
            <title>Essence Mascara Lash Princess | Goods4you</title>
            <meta name='description' content='Essence Mascara Lash Princess from Goods4you' />
        </Helmet>
        <div className={style.page}>
            <section className={style.pageWrap}>
                <div className={style.imagesWrap}>
                    <picture className={style.bigImg}>
                        <img src={shoesImg} alt="" />
                    </picture>
                    <div className={style.galleryWrap}>
                        {/* TODO: MAP */}
                        <picture className={style.littleImgWrap}>
                            <div className={style.shooseImgBorder}></div>
                            <img className={style.galleryPhoto} src={shoesImg} alt="" />
                        </picture>
                        <picture className={style.littleImgWrap}>
                            <img className={style.galleryPhoto} src={shoesImg} alt="" />
                        </picture>
                        <picture className={style.littleImgWrap}>
                            <img className={style.galleryPhoto} src={shoesImg} alt="" />
                        </picture>
                        <picture className={style.littleImgWrap}>
                            <img className={style.galleryPhoto} src={shoesImg} alt="" />
                        </picture>
                        <picture className={style.littleImgWrap}>
                            <img className={style.galleryPhoto}src={shoesImg} alt="" />
                        </picture>
                        <picture className={style.littleImgWrap}>
                            <img className={style.galleryPhoto} src={shoesImg} alt="" />
                        </picture>
                    </div>
                </div>
                <div className={style.contentWrap}>
                    <h1 className={style.title}>Essence Mascara Lash Princess</h1>
                        <div className={style.info}>
                            <fieldset className={style.ratingWrap}>
                                <legend className={style.hidden}>Rate this product</legend>
                                <Rating></Rating>
                            </fieldset>
                            <p className={style.goodsClass}>electronics, selfie accessories</p>
                        </div>
                        <div className={style.stockWrap}>
                            <p className={style.stockText}>In Stock - Only 5 left!</p>
                        </div>
                        <p className={style.descriptionText}>
                        The Essence Mascara Lash Princess is a popular mascara known for its<br></br>volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting<br></br>and cruelty-free formula.
                        </p>
                        <p className={style.add}>1 month warranty</p>
                        <p className={style.add}>Ships in 1 month</p>
                        <div className={style.byeWrap}>
                            <div className={style.priceWrap}>
                                <span className={style.finalPrice}>7.17$</span>
                                <span className={style.startedPrice}>9.99$</span>
                            </div>
                            <p className={style.discountWrap}>
                                <span className={style.discountText}>Your discount:</span>
                                <span className={style.discountNumber}>14.5%</span>
                            </p>
                            {number > 0 ? <div className={style.countPanelWrap}><CountPanel num={number} setNumber={setNumber}></CountPanel></div> : <button className={style.btnAdd} onClick={() => {setNumber(number + 1)}}><p className={style.btnAddText}>Add to cart</p></button>}
                        </div>
                </div>
            </section>
        </div>
    </>
    )
}

export default ProductPage