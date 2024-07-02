import cart from '../../../assets/cart.png';
import CartCounter from '../cartCounter/cartCounter';
import styles from './Nav.module.scss';

function Nav () {
    return(
    <div className={styles.navWrap}>
        <nav className={styles.nav} aria-label="Goods4you">
            <ul className={styles.navList} role="menubar" aria-label="Goods4you menu">
                <li role="none">
                    <a role="menuitem" href="#home" className={styles.menuItem}> Catalog </a>
                </li>
                <li role="none">
                    <a role="menuitem" href="#faq" className={styles.menuItem}> FAQ </a>
                </li>
                <li role="none" className={styles.cartWrap}>
                    <a role="menuitem" href="#cart" className={styles.menuItem}> Cart </a>
                    <picture className={styles.puctureWrap}>
                        <img src={cart} alt="Иконка корзины" className={styles.cartPic}/>
                        {/* CartCounter - оранжевый кружок с числом товаров в корзине спозиционирован абсолютно */}
                        <CartCounter />
                    </picture>
                </li>
            </ul>
        </nav>
        <span className={styles.navSpan}>Johnson Smith</span>
    </div>
    )
}

export default Nav;