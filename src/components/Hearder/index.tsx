import logo from '../../images/logo.png';
import styles from './Header.module.css'

function Header() {
  return (
    <header>
      <img src={logo} alt="logo" className={styles.img} />
      <div>
        <h1 className={styles.title}>TRYBE NEWS</h1>
      </div>
    </header>
  );
}

export default Header;