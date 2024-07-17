import { Dispatch, SetStateAction, useState } from 'react';

import CountPanel from '../countPanel/countPanel';
import ButtonCart from '../button/button-cart/buttonCart';

export interface IIncrease {
    id: number,
    quantity: number
}

export interface IDecrease {
    id: number,
    quantity: number
}

export interface IDelete {
    id: number,
}

export interface IUpdateCart {
    id: number,
    quantity: number
}

export interface IAddOrCountProps {
    increaseOnClick: ({ id, quantity }: IIncrease) => void,
    decreaseOnClick: ({ id, quantity }: IDecrease) => void,
    num: number,
    id: number
}

function AddOrCount (props: IAddOrCountProps) {

    const { id, num, increaseOnClick, decreaseOnClick } = props;
    const [number, setNumber] = useState(0)

    return (
        <>
            {num > 0 ? <CountPanel id={id} num={num} increaseOnClick={()=> increaseOnClick({id: id, quantity: num})} decreaseOnClick={()=> decreaseOnClick({id: id, quantity: num})}></CountPanel> : <ButtonCart setNumber={setNumber}></ButtonCart>}
        </>
    )
}

export default AddOrCount;