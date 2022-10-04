import React, { useContext } from 'react';

import { ShopContext } from '../../services/context';

import BasketItem from './BasketItem';

const BasketList = () => {
  const {
    order = [],
    handleBasketShow = Function.prototype
  } = useContext(ShopContext);

  const totalPrice = order.reduce((sum, el) => {
    return sum + el.price * el.quantity;
  }, 0);

  return (
    <ul className='collection basket-list'>
      <li className='collection-item active'>Cart</li>
      {order.length ? (
        order.map(item => <BasketItem key={item.id} {...item} />)
      ) : (
        <li className='collection-item'> Cart is empty</li>
      )}
      <li className='collection-item active'>Total price: {totalPrice} $
        <button className='secondary-content btn btn-small'>Make a purchase</button>
      </li>
      <i className='material-icons basket-close' onClick={handleBasketShow}>clear</i>
    </ul>
  );
};

export default BasketList;
