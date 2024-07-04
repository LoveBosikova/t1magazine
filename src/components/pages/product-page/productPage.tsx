import shoesImg from '../../../assets/shoes.jpg';

import style from './ProductPage.module.scss';

function ProductPage () {
    return (
        <div className={style.pageWrap}>
            <section>
                <div className={style.imagesWrap}>
                    <picture>
                        <img src={shoesImg} alt="" />
                    </picture>
                    <div className={style.galleryWrap}>
                        <picture>
                            <img src={shoesImg} alt="" />
                        </picture>
                        <picture>
                            <img src={shoesImg} alt="" />
                        </picture>
                        <picture>
                            <img src={shoesImg} alt="" />
                        </picture>
                        <picture>
                            <img src={shoesImg} alt="" />
                        </picture>
                        <picture>
                            <img src={shoesImg} alt="" />
                        </picture>
                        <picture>
                            <img src={shoesImg} alt="" />
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


                </div>
            </section>
        </div>
    )

}

export default ProductPage