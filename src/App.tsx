import Header from './components/layout/header/header';
import MainPage from './components/pages/main-page/mainPage';
import ProductPage from './components/pages/product-page/productPage';
import Footer from './components/layout/footer/footer';

import styles from './App.module.scss';
import CartPage from './components/pages/cartPage/cartPage';

function App() {

  return (
    <div className={styles.container}>
      <Header></Header>
      {/* <ProductPage></ProductPage> */}
      {/* <MainPage></MainPage> */}
      <CartPage></CartPage>
      <Footer></Footer>
    </div>
  )
}

export default App
