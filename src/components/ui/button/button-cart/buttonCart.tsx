import cartImg from '../../../assets/cart.png';

import style from './ButtonCart.module.scss';

function ButtonCart () {
    return (
        <button className={style.btn}>
            <picture className={style.iconWrap}>
                <img className={style.icon} src={cartImg} alt='CartIcon'/>
            </picture>
        </button>
    )
}

export default ButtonCart;