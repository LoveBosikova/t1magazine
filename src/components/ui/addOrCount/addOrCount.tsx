import { Dispatch, SetStateAction } from 'react';

import CountPanel from '../countPanel/countPanel';
import ButtonCart from '../button/button-cart/buttonCart';

export interface IAddOrCountProps {
    setNumber: Dispatch<SetStateAction<number>>,
    num: number,
}

function AddOrCount (props: IAddOrCountProps) {

    const { num, setNumber } = props;

    return (
        <>
            {num > 0 ? <CountPanel num={num} setNumber={setNumber}></CountPanel> : <ButtonCart setNumber={setNumber}></ButtonCart>}
        </>
    )
}

export default AddOrCount;