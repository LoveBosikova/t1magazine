import React from "react";
import Header from "/src/components/layout/header/header";
import Footer from "/src/components/layout/footer/footer";
import MainPage from "/src/components/pages/main-page/main-page";
import "./style.css";

// Обёртка для контента страниц
function PageWrapper({ children, features }) {
  return (
    <>
      <Header />
      <main className="page-wrapper__main">
        <MainPage features={features} />
      </main>
      <Footer />
    </>
  );
}

export default PageWrapper;
