import cart from '../../../assets/cart.png';
import CartCounter from '../cartCounter/cartCounter';
import style from './Nav.module.scss';

function Nav () {
    return(
    <div className={style.navWrap}>
        <nav className={style.nav} aria-label="Goods4you">
            <ul className={style.navList} role="menubar" aria-label="Goods4you menu">
                <li role="none">
                    <a role="menuitem" href="#home" className={style.menuItem}> Catalog </a>
                </li>
                <li role="none">
                    <a role="menuitem" href="#faq" className={style.menuItem}> FAQ </a>
                </li>
                <li role="none" className={style.cartWrap}>
                    <a role="menuitem" href="#cart" className={style.menuItem}> Cart </a>
                    <picture className={style.puctureWrap}>
                        <img src={cart} alt="Иконка корзины" className={style.cartPic}/>
                        {/* CartCounter - оранжевый кружок с числом товаров в корзине спозиционирован абсолютно */}
                        <CartCounter />
                    </picture>
                </li>
            </ul>
        </nav>
        <span className={style.navSpan}>Johnson Smith</span>
    </div>
    )
}

export default Nav;