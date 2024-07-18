import { Dispatch,  SetStateAction} from 'react';

import cartImg from '../../../../assets/cart.png';

import { IIncrease } from '../../addOrCount/addOrCount';

import style from './ButtonCart.module.scss';

function ButtonCart ({setNumber, increaseOnClick, id, quantity, isLoading}: {
    id: number,
    quantity: number,
    isLoading: boolean,
    setNumber: Dispatch<SetStateAction<number>>, 
    increaseOnClick: ({ id, quantity }: IIncrease) => void,
}) {
    return (
        <button 
        className={style.btn} 
        disabled={isLoading}
        onClick={() =>{
            setNumber(1)
            increaseOnClick({id, quantity})
        }}>
            <picture className={style.iconWrap}>
                <img className={style.icon} src={cartImg} alt='CartIcon'/>
            </picture>
        </button>
    )
}

export default ButtonCart;