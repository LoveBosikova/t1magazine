import shoesImg from '../../../assets/whiteBoots.jpg';

import style from './ProductPage.module.scss';

function ProductPage () {
    return (
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
                        <div className={style.ratingWrap}>
                            {/* stars */}
                            <p className={style.goodsClass}>electronics, selfie accessories</p>
                        </div>

                        <div className={style.stockWrap}>
                            <p className={style.stockText}>In Stock - Only 5 left!</p>
                        </div>

                        <p className={style.descriptionText}>
                        The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.
                        </p>

                        <p className={style.add}>1 month warranty</p>
                        <p className={style.add}>Ships in 1 month</p>

                        <div>
                            {/* to bye elem */}
                        </div>
                        


                </div>
            </section>
        </div>
    )

}

export default ProductPage