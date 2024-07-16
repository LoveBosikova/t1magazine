import style from './Auth.module.scss'
import { useState } from 'react';
import { Redirect } from "react-router-dom";
import { useContext } from 'react';
import { userContext } from '../../../App';
import Loading from '../../ui/loading/loading';


import { useDispatch } from "react-redux";
import { getCartItems } from '../../../redux/slices/cartSlice';



function Auth (props: {setLoggedIn: any}) {

    const dispatch = useDispatch();

    const [error, setError] = useState('');
    const [login, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {user} = useContext(userContext);
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = async (event: any) => {
        event.preventDefault();

        const {setLoggedIn} = props;
    
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
                expiresInMins: 2000, 
            })
        })
        .then(res => res.json())
        .then(user => {
            // Устанавливаем юзера в контекст, закидываем токен в локал сторадж, заканчиваем загрузку, добываем данные корзины
            user = {...user};
            localStorage.setItem('token', user.token)
            setIsLoading(false)
            dispatch(getCartItems(user.id))
            console.log(user);
            setLoggedIn(true)
        });
    }

    return (
        <section className={style.pageWrap}>
            <h1 className={style.title}>Sign in</h1>
            <fieldset className={style.fieldset}>
                {isLoading? <Loading></Loading> : 
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
                }

                <button className={style.btn} type='submit' onClick={(e)=> onSubmit(e)}>Sign in</button>
            </fieldset>
        </section>
    )
}

export default Auth;