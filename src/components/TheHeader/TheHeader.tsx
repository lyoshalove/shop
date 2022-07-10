import React from "react";
import cart from "../../assets/images/icons/cart.svg";
import './TheHeader.sass';
import { Link } from "react-router-dom";
import type { RootState } from "../../store/store";
import { useSelector } from "react-redux";

const TheHeader = () => {
  const products = useSelector((state: RootState) => state.cart.products);

  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <Link to="/" className="header__logo logo">
            Bebra Collection
          </Link>
          <nav className="header__nav">
            <ul className="header__menu">
              <li className="header__menu-item">
                <Link to="/" className="header__menu-link">
                  Home
                </Link>
              </li>
              <li className="header__menu-item">
                <Link to="/products" className="header__menu-link">
                  Products
                </Link>
              </li>
              <li className="header__menu-item">
                <Link to="/about" className="header__menu-link">
                  About
                </Link>
              </li>
              <li className="header__menu-item">
                <Link to="/contacts" className="header__menu-link">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          <ul className="header__actions">
            <li className="header__actions-item">
              <Link to="/cart" className="header__actions-link">
                <img src={cart} alt="cart" className="header__actions-icon" />
                {products.length > 0 && (
                  <span className="header__actions-counter">
                    { products.length <= 9 ? products.length : '9+' }
                  </span>
                )}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default TheHeader;
