import React from 'react';
import {Link} from 'react-router-dom';

interface IProps {
  id: number;
  image: string;
  title: string;
  price: number;
}

const Product = ({ id, image, title, price }: IProps) => {
  return (
    <div className="products__items-product">
      <img className="products__items-image" src={image} alt="product" />
      <h3 className="products__items-title center">{title}</h3>
      <span className="products__items-price">${price}</span>
      <Link to={`/products/${id}`} className="products__items-btn btn">Buy now</Link>
    </div>
  );
};

export default Product;