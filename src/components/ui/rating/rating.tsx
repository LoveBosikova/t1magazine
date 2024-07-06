import emptyStar from '../../../assets/emptyRatingStar.svg';

import style from './Rating.module.scss';

function Rating () {
    return (
        <div className={style.rating}>

            <input className={style.hidden} type='radio' name='star' id='star-1' ></input>
            <label className={style.starWrap} htmlFor='star-1'>
                <img src={emptyStar} alt='' />
                <span className={style.hidden}>1 star</span>
            </label>

            <input className={style.hidden} type='radio' name='star' id='star-2' > 
            </input>
            <label className={style.starWrap} htmlFor='star-2'>
                <img src={emptyStar} alt='' />
                <span className={style.hidden}>2 star</span>
            </label>

            <input className={style.hidden} type='radio' name='star' id='star-3' ></input>
            <label className={style.starWrap} htmlFor='star-3'>
                <img src={emptyStar} alt='' />
                <span className={style.hidden}>3 star</span>
            </label>

            <input className={style.hidden} type='radio' name='star' id='star-4' ></input>
            <label className={style.starWrap} htmlFor='star-4'>
                <img src={emptyStar} alt='' />
                <span className={style.hidden}>4 star</span>
            </label>

            <input className={style.hidden} type='radio' name='star' id='star-5' ></input>
            <label className={style.starWrap} htmlFor='star-5'>
                <img src={emptyStar} alt='' />
                <span className={style.hidden}>5 star</span>
            </label>
        </div>
    )
}

export default Rating;