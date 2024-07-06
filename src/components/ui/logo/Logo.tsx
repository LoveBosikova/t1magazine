import { Link } from 'react-router-dom';
import styles from './Logo.module.scss';

// Логотип сайта с названием
function Logo() {
  return (
    <Link to='/' className={styles.logo}>Goods4you</Link>
  );
}

export default Logo;
