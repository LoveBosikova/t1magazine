import style from './Auth.module.scss'
import { useState, useContext } from 'react';
import { useDispatch } from "react-redux";

import { userContext } from '../../../App';

import Loading from '../../ui/loading/loading';

import { getCartItems } from '../../../redux/slices/cartSlice';

function Auth (props: {setLoggedIn: any}) {
    const dispatch = useDispatch();

    // ЗАбираем данные о юзере из контекста и залогинен ли пользователь через пропсы
    const {setLoggedIn} = props;
    let {user} = useContext(userContext);

    // Собираем данные об ошибках, состоянии загрузки, логине и пароле
    const [error, setError] = useState('');
    const [login, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    
    const onSubmit = async (event: any) => {
        event.preventDefault();
    
        // Проверяем пароль и логин 
        if (!login || !password) {
            setError('Please enter your username and password')
            return;
        }
    
        setError('')
        setIsLoading(true)
    
        fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: login,
                password: password,
                expiresInMins: 1, 
            })
        })
        .then(res => res.json())
        .then(curUser => {
            // Устанавливаем юзера в контекст, закидываем токен в локал сторадж, 
            // заканчиваем загрузку, добываем данные корзины по айди пользователя
            user = {...curUser};
            localStorage.setItem('token', curUser.token)
            setIsLoading(false)
            dispatch(getCartItems(user.id))
            setLoggedIn(true)
        });
    }

    return (
        <section className={style.pageWrap}>
            {/* При загрузке показываем лоадер */}
            {isLoading ? <Loading></Loading> : <>
            <h1 className={style.title}>Sign in</h1>
            <fieldset className={style.fieldset}> 
                <>
                    <input type='text'
                    name='userName' 
                    id='userName' 
                    className={style.nameInput} 
                    placeholder='Login' 
                    autoComplete='email' 
                    value={login} 
                    onChange={(e) => setEmail(e.target.value)} />

                    <input 
                    type='text' 
                    name='password' 
                    id='password' 
                    className={style.passwordInput} 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}  
                    placeholder='Password' />
                </>

                <button className={style.btn} type='submit' onClick={(e)=> onSubmit(e)}>Sign in</button>
            </fieldset>
            </>}
        </section>
    )
}

export default Auth;