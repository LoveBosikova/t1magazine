import minusIcon from '../../../assets/minus.png';
import plusIcon from '../../../assets/plus.png';

import { IAddOrCountProps } from '../addOrCount/addOrCount';

import style from './CountPanel.module.scss';

function CountPanel (props: IAddOrCountProps) {

    const {id, num, increaseOnClick, decreaseOnClick} = props;

    return (
        <div className={style.countWrap}>
            <button className={style.countBtn} onClick={()=> decreaseOnClick({id: id, quantity: num})}>
                <img className={style.icon} src={minusIcon} alt='' />
            </button>
            <div className={style.countTextWrap}>
                <span className={style.countText}>{num} {num > 1? 'items' : 'item'}</span>
            </div>
            <button className={style.countBtn} onClick={()=> increaseOnClick({id: id, quantity: num})}>
                <img className={style.icon} src={plusIcon} alt='' />
            </button>
        </div>
    )
}

export default CountPanel;