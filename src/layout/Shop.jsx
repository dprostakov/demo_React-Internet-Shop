import React, { useEffect, useContext } from 'react';

import Preloader from '../components/preloader/Preloader';
import GoodsList from '../components/goods/GoodsList';
import Cart from '../components/basket/Cart';
import BasketList from '../components/basket/BasketList';
import Alert from '../components/alert/Alert';

import { ShopContext } from '../services/context';

const API_URL = 'https://fortniteapi.io/v1/shop?lang=en';
const API_KEY = process.env.REACT_APP_API_KEY;

const Shop = () => {
  const {
    loading,
    order,
    isBasketShow,
    alertName,
    setGoods
  } = useContext(ShopContext);

  useEffect(() => {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then(response => response.json())
      .then(data => {
        setGoods(data.featured);
      });
    // eslint-disable-next-line
  }, []);

  return (
    <main className='container content'>
      <Cart quantity={order.length} />
      {loading ? <Preloader /> : <GoodsList />}
      {isBasketShow && <BasketList />}
      {alertName && <Alert />}
    </main>
  );
};

export default Shop;
