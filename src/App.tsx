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
  
  console.log(cookieToken);
  
  // localStorage.clear()
  
  // Устанавливаем значение логирован ли ползьзователь 
  // в зависимости от этого в роутах перенаправляем пользователя на страницу аутентификации или нет
  const [loggedIn, setLoggedIn] = useState(!!cookieToken);

  const [currentUser, setCurrentUser] = useState<null | IUser>(null);
  let {user} = useContext(userContext);

  useEffect(()=> {
    fetch('https://dummyjson.com/auth/me', {
      method: 'GET',
      headers: {
      'Authorization': `Bearer ${cookieToken}`, 
    }, 
  })
  .then(res => res.json())
  .then(curUser => {
    setCurrentUser(curUser);
    dispatch(getCartItems(curUser.id))
    user = curUser;
  });
  }, [loggedIn])

  console.log(currentUser);

  return (
  <userContext.Provider value={{
    user: currentUser,
  }}>
    <div className={styles.container}>
      <Header></Header>
      <Switch>
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
