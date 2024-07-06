import shoes from '../../../assets/whiteBoots.jpg';

import { useState, Dispatch, SetStateAction } from 'react';
import { Link } from 'react-router-dom';

import ButtonDelete from '../../ui/button/button-delete/buttonDelete';
import AddOrCount from '../addOrCount/addOrCount';

import style from './CartItem.module.scss';

export interface IAddOrCountProps {
    setNumber: Dispatch<SetStateAction<number>>,
    num: number,
}

function CartItem () {

    const [number, setNumber] = useState<number>(1);
    
    return (
        <li className={style.item}>
            <picture className={number < 1 ? style.imgWrapTransparent : style.imgWrap}>
                <img className={style.itemImg} src={shoes} alt='' />
            </picture>
            <div className={number < 1 ? style.infoWrapTransparent : style.infoWrap}>
                <Link  to='/product/1' className={style.info}>Essence Mascara Lash Princess</Link>
                <p className={style.price}>110 $</p>
            </div>
            <div className={number < 1 ? style.countWrapEmpty : style.countWrap}>
                <AddOrCount num={number} setNumber={setNumber}></AddOrCount>
            </div>
            {number < 1 ? <></> : <div className={style.deleteWrap}><ButtonDelete setNumber={setNumber}></ButtonDelete></div>}
        </li>
    )
}

export default CartItem;