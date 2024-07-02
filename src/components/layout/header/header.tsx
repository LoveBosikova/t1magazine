import Logo from "../../ui/logo/Logo";
import Nav from "../../ui/nav/nav";
import styles from './Header.module.scss';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.contentWrap}>
        <Logo></Logo>
        <Nav></Nav>

      </div>
    </header>
  );
}

export default Header;
