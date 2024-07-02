import React from "react";
import Logo from "/src/components/ui/logo/logo";
import "./style.css";

function Footer() {
  return (
    <footer className="footer">
      <Logo />
      <span className="footer__copyright"> Создано 2021</span>
    </footer>
  );
}

export default Footer;
