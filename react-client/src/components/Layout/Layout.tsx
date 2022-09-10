import { ReactNode } from 'react';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import s from './Layout.module.scss';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <div className={s.mainContainer}>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
