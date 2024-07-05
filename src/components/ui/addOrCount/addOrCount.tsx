import { useState } from 'react';
import { Dispatch } from 'react';
import { SetStateAction } from 'react';
import CountPanel from '../countPanel/countPanel';
import ButtonCart from '../button/button-cart/buttonCart';

// import style from './AddOrCount.module.scss';

export interface IAddOrCountProps {
    setNumber: Dispatch<SetStateAction<number>>,
    num: number,
}

function AddOrCount (props: IAddOrCountProps) {
    
    // const [number, setNumber] = useState<number>(num)
    const { num, setNumber } = props;


    return (
        <>
            {num > 0 ? <CountPanel num={num} setNumber={setNumber}></CountPanel> : <ButtonCart setNumber={setNumber}></ButtonCart>}
        </>
    )
}

export default AddOrCount;