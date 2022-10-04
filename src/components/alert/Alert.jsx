import React, { useEffect, useContext } from 'react';

import { ShopContext } from '../../services/context';

const Alert = () => {
  const {
    alertName: name = '',
    closeAlert = Function.prototype
  } = useContext(ShopContext);

  useEffect(() => {
    const timerId = setTimeout(closeAlert, 3000);
    return () => {
      clearInterval(timerId);
    };
    // eslint-disable-next-line
  }, [name]);

  return (
    <div id='toast-container'>
      <div className='toast'>{name} added to cart</div>
    </div>
  );
};

export default Alert;
