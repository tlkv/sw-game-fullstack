import { ReactNode } from 'react';
import Header from 'components/Header/Header';
import s from './Layout.module.scss';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className={s.stars} />
      <div className={s.twinkling} />
      <Header />
      <div className={s.mainContainer}>{children}</div>
    </>
  );
};

export default Layout;
