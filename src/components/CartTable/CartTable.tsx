import React from 'react';
import "./CartTable.sass";
import type { RootState } from '../../store/store';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../../store/cart/cartSlice';

const CartTable = () => {
  const cart = useSelector((state: RootState) => state.cart.products),
        dispatch = useDispatch(),
        prices = cart.map(product => product.price);
  let subtotal = cart.length
      ? Math.round(prices.reduce((acc, currentValue) => (acc += currentValue)))
      : 0,
    shoppingCost = 49,
    total = subtotal + shoppingCost;

  return (
    <div className="cart__table">
      <div className="cart__table-item">
        Subtotal: <span>${subtotal}</span>
      </div>
      <div className="cart__table-item">
        Shopping Cost: <span>${shoppingCost}</span>
      </div>
      <div className="cart__table-item">
        Total: <span>${total}</span>
      </div>
      <button className="cart__table-btn btn">Pay</button>
      <button onClick={() => dispatch(clearCart())} className="cart__table-btn btn btn-bad">Clear Cart</button>
    </div>
  );
};

export default CartTable;