import React from 'react';
import trashCan from "../../assets/images/icons/trash.svg";
import './CartProduct.sass';
import { useDispatch } from 'react-redux';
import { deleteItem } from '../../store/cart/cartSlice';

interface IProps {
  id: number;
  image: string;
  title: string;
  description: string;
}

const CartProduct = ({ id, image, title, description }: IProps) => {
  const dispatch = useDispatch();

  function sliceString(string: string, symbols: number): string {
    if (string.length > symbols) {
      return `${string.slice(0, symbols)}...`;
    }

    return string;
  }

  return (
    <li className="cart__cards-item">
      <div className="cart__cards-img_wrapper">
        <img src={image} alt={title} className="cart__cards-img" />
      </div>
      <div className="cart__cards-info">
        <h3 className="cart__cards-title">{sliceString(title, 20)}</h3>
        <p className="cart__cards-description">
          {sliceString(description, 150)}
        </p>
      </div>
      <div className="cart__cards-count center">
        кол-во: <strong>1</strong>
      </div>
      <button onClick={() => dispatch(deleteItem(id))} className="cart__cards-btn cart__cards-btn_circle btn btn-bad">
        <img src={trashCan} alt="remove product" className="btn-bad__img" />
      </button>
    </li>
  );
};

export default CartProduct;