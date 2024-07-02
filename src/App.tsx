import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/layout/header/header';

import styles from './App.module.scss';
import Footer from './components/layout/footer/footer';
import MainPage from './components/pages/main-page/mainPage';


function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className={styles.container}>
      <Header></Header>
      <MainPage></MainPage>
      <Footer></Footer>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}

    </div>
  )
}

export default App
