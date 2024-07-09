import Header from './components/layout/header/header';
import MainPage from './components/pages/main-page/mainPage';
import ProductPage from './components/pages/product-page/productPage';
import CartPage from './components/pages/cartPage/cartPage';
import Footer from './components/layout/footer/footer';
import ErrorPage from './components/pages/404/404';

import { 
  Switch, 
  Route } 
  from 'react-router-dom';

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCartItems } from './redux/slices/cartSlice';

import styles from './App.module.scss';

function App() {

  const dispatch = useDispatch();
  
  // Инициализируем корзину, чтобы сразу подгружалась
  useEffect(()=>{
    dispatch(getCartItems(1))
  },[])


  return (
    <div className={styles.container}>
      <Header></Header>
      <Switch>
          <Route exact path="/">
            <MainPage />
          </Route>
          <Route path="/cart">
            <CartPage />
          </Route>
          <Route path="/product">
            <ProductPage />
          </Route>
          <Route path="*">
            <ErrorPage />
          </Route>
        </Switch>
      <Footer></Footer>
    </div>
  )
}

export default App
