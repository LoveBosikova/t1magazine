import { Dispatch,  SetStateAction} from 'react';

import style from './ButtonDelete.module.scss';

function ButtonDelete ({setNumber}: {setNumber: Dispatch<SetStateAction<number>>}) {
    return (
        <button className={style.btnDelete} onClick={() => setNumber(0)}>Delete</button>
    )
}

export default ButtonDelete;