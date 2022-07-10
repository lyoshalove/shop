import React from "react";
import type { RootState } from "../../store/store";
import { useSelector, useDispatch } from "react-redux";
import "./Cart.sass";
import { useNavigate } from "react-router-dom";
import CartProduct from "../../components/CartProduct/CartProduct";
import CartTable from "../../components/CartTable/CartTable";

const Cart = () => {
  const cart = useSelector((state: RootState) => state.cart.products);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <section className="cart">
      <div className="container">
        <div className="cart__inner">
          <h2 className="cart__title center">Cart</h2>
          {cart.length ? (
            <div className="cart__content">
              <ul className="cart__cards">
                {cart.map((product) => {
                  return (
                    <CartProduct
                      key={product.id}
                      id={product.id}
                      image={product.image}
                      title={product.title}
                      description={product.description}
                    />
                  );
                })}
              </ul>
              <CartTable></CartTable>
            </div>
          ) : (
            <div>
              <h2 className="cart__title-nothing center">
                Cart is empty
              </h2>
              <button
                className="btn cart__btn"
                onClick={() => navigate("/products")}
              >
                Shopping
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Cart;
