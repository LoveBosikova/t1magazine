import Logo from '../../ui/logo/Logo';
import style from './Footer.module.scss'

function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.logoWrap}>
        <Logo />
      </div>
      <div className={style.linkWrap}>
        <a role="menuitem" href="#catalog" className={style.link}> Catalog </a>
        <a role="menuitem" href="#faq" className={style.link}> FAQ </a>
      </div>
    </footer>
  );
}

export default Footer;
