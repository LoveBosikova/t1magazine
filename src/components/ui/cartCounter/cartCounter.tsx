import { useSelector } from 'react-redux';

import styles from './CartCounter.module.scss'

function CartCounter () {

    let { amount } = useSelector((state) => state.cart);

    return amount === 0 ? <></> : (
        <div className={styles.cartCounter}>
            <span className={styles.cartCount} >{amount}</span>
        </div>
    )
}

export default CartCounter;