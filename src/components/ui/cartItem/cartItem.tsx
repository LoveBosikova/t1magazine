import { useState, Dispatch, SetStateAction } from 'react';
import { Link } from 'react-router-dom';

import ButtonDelete from '../../ui/button/button-delete/buttonDelete';
import AddOrCount from '../addOrCount/addOrCount';

import type { IFeature } from '../featureCard/featureCard';

import style from './CartItem.module.scss';

export interface IAddOrCountProps {
    setNumber: Dispatch<SetStateAction<number>>,
    num: number,
}

function CartItem ( {
    id,
    title, 
    price, 
    quantity, 
    thumbnail
} : IFeature) {

    const [number, setNumber] = useState<number>(quantity);
    
    return (
        <li className={style.item}>
            <picture className={number < 1 ? style.imgWrapTransparent : style.imgWrap}>
                <img className={style.itemImg} src={thumbnail} alt='' />
            </picture>
            <div className={number < 1 ? style.infoWrapTransparent : style.infoWrap}>
                <Link  to={`/product/${id}`} className={style.info}>{title}</Link>
                <p className={style.price}>{price} $</p>
            </div>
            <div className={number < 1 ? style.countWrapEmpty : style.countWrap}>
                <AddOrCount num={number} setNumber={setNumber}></AddOrCount>
            </div>
            {number < 1 ? <></> : <div className={style.deleteWrap}><ButtonDelete setNumber={setNumber}></ButtonDelete></div>}
        </li>
    )
}

export default CartItem;