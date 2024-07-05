import ButtonLink from '../../ui/button/button-link/buttonLink';
import style from './About.module.scss';

// Раздел о магазине одежды и обуви
function About() {
  return (
    <section className={style.banner}>
      <div className={style.contentWrap}>
        {/* Надпись на фоне, абсолютное позиционирование */}
        <div className={style.bcground}>
          <span className={style.bcgroundText}>Goods4you</span>
        </div>

        <h1 className={style.title}>Any products from famous brands <br></br> with worldwide delivery</h1>
        <p className={style.text}>We sell smartphones, laptops, clothes, shoes <br></br> and many other products at low prices</p>
        <ButtonLink>
          <span className={style.btnText}>Go to shopping</span>
        </ButtonLink>
      </div>
    </section>
  );
}

export default About;
