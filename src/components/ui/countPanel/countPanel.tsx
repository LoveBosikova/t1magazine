import minusIcon from '../../../assets/minus.png';
import plusIcon from '../../../assets/plus.png';

import style from './CountPanel.module.scss';

function CountPanel () {
    return (
        <div className={style.countWrap}>
            <button className={style.countBtn}>
                <img src={minusIcon} alt='' />
            </button>
            <div className={style.countTextWrap}>
                <span className={style.countText}>1 item</span>
            </div>
            <button className={style.countBtn}>
                <img src={plusIcon} alt='' />
            </button>
        </div>
    )
}

export default CountPanel;