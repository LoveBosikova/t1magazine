import shoes from '../../../assets/whiteBoots.jpg';
import ButtonDelete from '../../ui/button/button-delete/buttonDelete';
import CountPanel from '../../ui/countPanel/countPanel';

import style from './CartItem.module.scss';

function CartItem () {
    return (
        <li className={style.item}>
            <picture className={style.imgWrap}>
                <img className={style.itemImg} src={shoes} alt='' />
            </picture>
            <div className={style.infoWrap}>
                <p className={style.info}>Essence Mascara Lash Princess</p>
                <p className={style.price}>110 $</p>
            </div>
            <div className={style.countWrap}>
                <CountPanel></CountPanel>
            </div>
            <div className={style.deleteWrap}>
                <ButtonDelete></ButtonDelete>
            </div>
        </li>
    )
}

export default CartItem;