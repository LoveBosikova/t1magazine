import React, { useContext, useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import { getCartItems } from './redux/slices/cartSlice';

import Header from './components/layout/header/header';
import MainPage from './components/pages/main-page/mainPage';
import ProductPage from './components/pages/product-page/productPage';
import CartPage from './components/pages/cartPage/cartPage';
import Footer from './components/layout/footer/footer';
import ErrorPage from './components/pages/404/404';
import Auth from './components/pages/auth/auth';

import { 
  Switch, 
  Route,
  Redirect } 
  from 'react-router-dom';

import styles from './App.module.scss';

export interface IUser {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
  token: string;
  refreshToken: string;
}

export const userContext = React.createContext<{
  user: null | IUser;
}>({
  user: null,
});
userContext.displayName = 'UserContext';

function App() {
  const dispatch = useDispatch();
  
  // Смотрим, есть ли токен в куках
  const cookieToken = localStorage.getItem('token');
  
  // Устанавливаем значение логирован ли ползьзователь 
  // в зависимости от этого в роутах перенаправляем пользователя на страницу аутентификации или нет
  const [loggedIn, setLoggedIn] = useState(!!cookieToken);

  // Состояния текущего юзера в стейте и в контексте
  const [currentUser, setCurrentUser] = useState<null | IUser>(null);
  let {user} = useContext(userContext);

  // Если есть токен, то при загрузке запускаем аутентификацию 
  useEffect(()=> {
    cookieToken && fetch('https://dummyjson.com/auth/me', {
      method: 'GET',
      headers: {
      'Authorization': `Bearer ${cookieToken}`, 
    }, 
  })
  .then(res =>{
    // Если происходит ошибка инициализации - токен протух, то ставим незалогиненное состояние, 
    // что по роуту отправляет пользователя на страницу аутентификации
    if (!res.ok) {
    console.log('ошибка', res.status);
    setLoggedIn(false)
    }
      return res.json()
  })
  .then(curUser => {
    // когда получаем юзера, обновляем информацию о его корзине и записываем данные в контекст и стейт
    setCurrentUser(curUser);
    // setLoggedIn(true)
    dispatch(getCartItems(curUser.id))
    user = {...curUser};
  }) 
  }, [loggedIn])

  // console.log(currentUser);

  return (
  <userContext.Provider value={{
    user: currentUser,
  }}>
    <div className={styles.container}>
      <Header></Header>
      <Switch>
        {/* Со всех страниц отправляем незалогиненного пользователя на логин, 
        но если залогиненный хочет на эту страницу, отправляем на главную */}
          <Route exact path="/">
            {loggedIn ? <MainPage /> : <Redirect to="/login" /> }
          </Route>
          <Route path="/cart">
            {loggedIn ? <CartPage /> : <Redirect to="/login" /> }
          </Route>
          <Route path="/product">
            {loggedIn ? <ProductPage  /> : <Redirect to="/login" /> }
          </Route>
          <Route path="/login">
            {loggedIn ? <Redirect to="/" /> : <Auth setLoggedIn={setLoggedIn} />}
          </Route>
          <Route path="*">
            <ErrorPage />
          </Route>
        </Switch>
      <Footer></Footer>
    </div>
  </userContext.Provider>
  )
}

export default App
