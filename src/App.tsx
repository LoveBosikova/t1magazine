import Header from './components/layout/header/header';
import MainPage from './components/pages/main-page/mainPage';
import ProductPage from './components/pages/product-page/productPage';
import CartPage from './components/pages/cartPage/cartPage';
import Footer from './components/layout/footer/footer';

import { 
  Switch, 
  Route } 
  from 'react-router-dom';

import styles from './App.module.scss';

function App() {

  return (
    <div className={styles.container}>
      <Header></Header>
      <Switch>
          <Route path="/cart">
            <CartPage />
          </Route>
          <Route path="/product">
            <ProductPage />
          </Route>
          <Route path="/">
            <MainPage />
          </Route>
        </Switch>
      <Footer></Footer>
    </div>
  )
}

export default App
