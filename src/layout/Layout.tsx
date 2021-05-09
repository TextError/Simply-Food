import React from 'react';

import Navbar from './navbar/Navbar';
import Footer from './footer/Footer';

const Layout: React.FC<IProps> = ({ children }) => (
  <>
    <Navbar />
      {children}
    <Footer />
  </>
);

interface IProps {
  children: React.ReactNode
};

export default Layout;