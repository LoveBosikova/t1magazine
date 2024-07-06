import { Link } from "react-router-dom";

import cart from '../../../assets/cart.png';
import CartCounter from '../cartCounter/cartCounter';

import style from './Nav.module.scss';


function Nav () {
    return(
    <div className={style.navWrap}>
        <nav className={style.nav} aria-label='Goods4you'>
            <ul className={style.navList} role='menubar' aria-label='Goods4you menu'>
                <li role='none'>
                    <Link to='/#catalog' role='menuitem' className={style.menuItem} tabIndex={1}> Catalog </Link>
                </li>
                <li role='none'>
                    <a role='menuitem' href='#faq' className={style.menuItem} tabIndex={1}> FAQ </a>
                </li>
                <li role='none' className={style.cartWrap}>
                    <Link to='/cart' role='menuitem' className={style.menuItem} tabIndex={1}> Cart </Link>
                    <picture className={style.puctureWrap}>
                        <img src={cart} alt='' className={style.cartPic}/>
                        {/* CartCounter - оранжевый кружок с числом товаров в корзине спозиционирован абсолютно */}
                        <CartCounter />
                    </picture>
                </li>
                <li className={style.name}>Johnson Smith</li>
            </ul>
        </nav>
    </div>
    )
}

export default Nav;