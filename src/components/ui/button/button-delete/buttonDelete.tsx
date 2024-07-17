import { Dispatch,  SetStateAction} from 'react';
import { IDelete } from '../../addOrCount/addOrCount';

import style from './ButtonDelete.module.scss';

export interface IButtonDeleteProps {
    deleteOnClick: ({ id }: IDelete) => void,
    id: number
}

function ButtonDelete ({ deleteOnClick, id }: IButtonDeleteProps) {
    return (
        <button className={style.btnDelete} onClick={() => deleteOnClick({ id: id })}>Delete</button>
    )
}

export default ButtonDelete;