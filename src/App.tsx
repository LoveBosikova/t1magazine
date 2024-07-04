import Header from './components/layout/header/header';
import MainPage from './components/pages/main-page/mainPage';
import ProductPage from './components/pages/product-page/productPage';
import Footer from './components/layout/footer/footer';

import styles from './App.module.scss';

function App() {

  return (
    <div className={styles.container}>
      <Header></Header>
      <ProductPage></ProductPage>
      {/* <MainPage></MainPage> */}
      <Footer></Footer>
    </div>
  )
}

export default App
