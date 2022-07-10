import React, { useState, useEffect } from 'react';
import './Product.sass';
import { useParams } from 'react-router-dom';
import { IProduct } from '../../types/ProductTypes';
import Loader from '../../components/Loader/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { addItem } from '../../store/cart/cartSlice';
import {
  addNotification,
  deleteNotification,
} from "../../store/notifications/notificationsSlice";

const Product = () => {
  const [productData, setProductData] = useState<IProduct | any>();
  const [quantity, setQuantity] = useState<number>(1);
  const { id } = useParams();
  const [loading, setLoading] = useState<boolean>(false);
  const cart = useSelector((state: RootState) => state.cart.products);
  const notifications = useSelector((state: RootState) => state.notifications.messages);
  const dispatch = useDispatch();

  async function getProductInfo() {
    setLoading(true);
    await fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProductData(data));
    setLoading(false);
  }

  useEffect(() => {
    getProductInfo();
  }, []);

  function removeProduct() {
    dispatch(
      addNotification({
        id: notifications.length
          ? notifications[notifications.length - 1].id + 1
          : 0,
        text: "Меньше одного товара не купишь))",
        isGood: false,
      })
    )
    
    setTimeout(() => dispatch(deleteNotification()), 2000);
  }

  function addProduct() {
    dispatch(
      addNotification({
        id: notifications.length ? notifications[notifications.length - 1].id + 1 : 0,
        text: "Извините, покупка больше одного экземпляра товара запрещена...",
        isGood: false,
      })
    );

    setTimeout(() => dispatch(deleteNotification()), 2000);
  }

  function addToCart() {
    if (!cart.some((product) => product === productData)) {
      dispatch(addItem(productData));
      dispatch(
        addNotification({
          id: notifications.length
            ? notifications[notifications.length - 1].id + 1
            : 0,
          text: "Закинул товар в корзину :))",
          isGood: true,
        })
      );

      setTimeout(() => dispatch(deleteNotification()), 2000);
    } else {
      dispatch(
        addNotification({
          id: notifications.length
            ? notifications[notifications.length - 1].id + 1
            : 0,
          text: "Товар уже в корзине <3",
          isGood: false,
        })
      );

      setTimeout(() => dispatch(deleteNotification()), 2000);
    }
  }

  return (
    <section className="product">
      <div className="container">
        {loading ? (
          <Loader />
        ) : (
          <div className="product__inner">
            <div className="product__image">
              <img
                src={productData?.image}
                alt={productData?.title}
                className="product__image-img"
              />
            </div>
            <div className="product__info">
              <span className="product__info-category">
                {productData?.category}
              </span>
              <h3 className="product__info-title">{productData?.title}</h3>
              <p className="product__info-description">
                {productData?.description}
              </p>
              <div className="product__info-quantity">
                <div className="product__info-counter product-counter">
                  <div
                    className="product-counter__minus"
                    onClick={removeProduct}
                  >
                    &minus;
                  </div>
                  <span className="product-counter__quantity">{quantity}</span>
                  <div className="product-counter__plus" onClick={addProduct}>
                    +
                  </div>
                </div>
                <h4 className="product__info-price">${productData?.price}</h4>
              </div>
              <button
                className="product__info-btn btn"
                onClick={addToCart}
              >
                Add to cart
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Product;