import { NavLink } from 'react-router-dom';
import s from './Header.module.scss';

const Header = () => {
  return (
    <header className={s.header}>
      <nav className={s.navbar}>
        <NavLink to="/" className={s.headerItem}>
          Game
        </NavLink>
        <NavLink to="/stats" className={s.headerItem}>
          Stats
        </NavLink>
        <NavLink to="/main" className={s.headerItem}>
          Homeold
        </NavLink>
        <NavLink to="/counter" className={s.headerItem}>
          CounteroldZ
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
