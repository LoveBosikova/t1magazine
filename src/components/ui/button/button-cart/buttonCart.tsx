import { Dispatch,  SetStateAction} from 'react';

import cartImg from '../../../../assets/cart.png';

import style from './ButtonCart.module.scss';

function ButtonCart ({setNumber}: {setNumber: Dispatch<SetStateAction<number>>}) {
    return (
        <button className={style.btn} onClick={() => setNumber(1)}>
            <picture className={style.iconWrap}>
                <img className={style.icon} src={cartImg} alt='CartIcon'/>
            </picture>
        </button>
    )
}

export default ButtonCart;