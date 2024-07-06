import cart from '../../../assets/cart.png';
import MainPage from '../../pages/main-page/mainPage';
import CartCounter from '../cartCounter/cartCounter';
import style from './Nav.module.scss';

import {
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";

function Nav () {
    return(
    <div className={style.navWrap}>
        <nav className={style.nav} aria-label="Goods4you">
            <ul className={style.navList} role="menubar" aria-label="Goods4you menu">
                <li role="none">
                    <Link to="/#catalog" role="menuitem" className={style.menuItem} > Catalog </Link>
                </li>
                <li role="none">
                    <a role="menuitem" href="#faq" className={style.menuItem}> FAQ </a>
                </li>
                <li role="none" className={style.cartWrap}>
                    <Link to="/cart" role="menuitem" className={style.menuItem} > Cart </Link>
                    {/* <a role="menuitem" href="#cart" className={style.menuItem}> Cart </a> */}
                    <picture className={style.puctureWrap}>
                        <img src={cart} alt="Иконка корзины" className={style.cartPic}/>
                        {/* CartCounter - оранжевый кружок с числом товаров в корзине спозиционирован абсолютно */}
                        <CartCounter />
                    </picture>
                </li>
                <li className={style.menuItem}>Johnson Smith</li>
            </ul>
        </nav>
    </div>
    )
}

export default Nav;