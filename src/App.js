import React from 'react';

import Header from './layout/Header.jsx';
import Shop from './layout/Shop.jsx';
import Footer from './layout/Footer.jsx';

import { ContextProvider } from './services/context.js';

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <ContextProvider>
        <Shop />
      </ContextProvider>
      <Footer />
    </React.Fragment>
  );
};

export default App;
