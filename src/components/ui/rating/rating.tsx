import emptyStar from '../../../assets/emptyRatingStar.svg';

import style from './Rating.module.scss';

function Rating () {
    return (
        <div className={style.rating}>
            {/* TO DO: ally !!!??? */}
            <button className={style.starWrap}>
                <img src={emptyStar} alt='' />
            </button>
            <button className={style.starWrap}>
                <img src={emptyStar} alt='' />
            </button>
            <button className={style.starWrap}>
                <img src={emptyStar} alt='' />
            </button>
            <button className={style.starWrap}>
                <img src={emptyStar} alt='' />
            </button>
            <button className={style.starWrap}>
                <img src={emptyStar} alt='' />
            </button>
        </div>
    )
}

export default Rating;