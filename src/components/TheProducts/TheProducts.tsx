import React, { useState, useEffect } from "react";
import "./TheProducts.sass";
import Loader from "../Loader/Loader";
import { IProduct } from "../../types/ProductTypes";
import Product from "../Product/Product";

const Products = () => {
  const [productsData, setProductsData] = useState<IProduct[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  let componentMounted: boolean = true;

  function sliceString(string: string): string {
    if(string.length > 12) {
      return `${string.slice(0, 12)}...`;
    }

    return string;
  }

  function getFilteredProducts(category: string): void {
    setLoading(true);

    if (category !== "all") {
      fetch(`https://fakestoreapi.com/products/category/${category}`)
        .then((res) => res.json())
        .then((data) => {
          setProductsData(data);
        });
    } else {
      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data) => setProductsData(data));
    }

    setLoading(false);
  }

  function getCategories() {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      });
  }

  function getProducts() {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProductsData(data);
        setLoading(false);
      });
  }

  const getData = async () => {
    setLoading(true);
    await getCategories();
    await getProducts();

    return () => {
      componentMounted = false;
    };
  };

  useEffect(() => {
    try {
      getData();
    } catch(e) {
      console.warn(e);
    }
  }, []);

  return (
    <section className="products" id="products">
      <div className="container">
        {loading ? (
          <Loader />
        ) : (
          <div className="products__inner">
            <h2 className="products__title center">Products</h2>
            <ul className="products__categories">
              <li className="products__categories-item">
                <button
                  className="products__categories-btn"
                  onClick={() => getFilteredProducts('all')}
                >
                  all
                </button>
              </li>
              {categories.map((category) => {
                return (
                  <li key={category} className="products__categories-item">
                    <button
                      className="products__categories-btn"
                      onClick={() => getFilteredProducts(category)}
                    >
                      {category}
                    </button>
                  </li>
                );
              })}
            </ul>
            <div className="products__items">
              {productsData.map((product: IProduct) => {
                return (
                  <Product
                    key={product.id}
                    id={product.id}
                    image={product.image}
                    title={sliceString(product.title)}
                    price={product.price}
                  ></Product>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Products;
