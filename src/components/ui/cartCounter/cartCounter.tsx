import { useState } from "react";

import styles from './CartCounter.module.scss'

function CartCounter () {
    const [cartCount, setCartCount] = useState(1);
    return (
        <div className={styles.cartCounter}>
            <span className={styles.cartCount} >{cartCount}</span>
        </div>
    )
}

export default CartCounter;