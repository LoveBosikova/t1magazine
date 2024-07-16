import { useContext } from 'react';
import style from './UserName.module.scss';
import { userContext } from '../../../App';

// Имя пользователя

function UserName () {
    // Забираем данные из контекста и, если есть данные текущего пользователя, отображаем их
    // Если данных нет, не отображаем это поле
    const {user} = useContext(userContext);
    return (
        user && user.firstName !== undefined ? <li className={style.name}>{`${user.firstName} ${user.lastName}`}</li> : <></>
    )
}

export default UserName;