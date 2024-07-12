import { useSelector } from 'react-redux';

import styles from './CartCounter.module.scss'
import { RootState } from '../../../redux/store';

function CartCounter () {

    let { amount } = useSelector((state: RootState) => state.cart);

    return amount === 0 ? <></> : (
        <div className={styles.cartCounter}>
            <span className={styles.cartCount} >{amount}</span>
        </div>
    )
}

export default CartCounter;