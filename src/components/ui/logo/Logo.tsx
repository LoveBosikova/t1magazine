import { Link } from 'react-router-dom';
import {MemoryRouter} from 'react-router-dom';
import styles from './Logo.module.scss';

// Логотип сайта с названием
function Logo() {
  return (
    <MemoryRouter>
      <Link to='/' className={styles.logo}>Goods4you</Link>
    </MemoryRouter>
  );
}

export default Logo;
