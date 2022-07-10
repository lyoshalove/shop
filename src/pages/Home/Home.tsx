import React from 'react';
import heroImage from '../../assets/images/hero/hero-image.jpg';
import TheProducts from "../../components/TheProducts/TheProducts";
import './Home.sass';

const Home = () => {
  return (
    <div className="home">
      <div className="hero">
        <div className="container">
          <div className="hero__inner">
            <div className="hero__offer">
              <h1 className="hero__title">Sale: get up to 50% off now</h1>
              <p className="hero__description text">
                The greates collection of sale places from the world's finest
                fashion boutiques and brands - only on BEBRA
              </p>
              <a href="#products" className="hero__btn btn">Shop now</a>
            </div>
            <div className="hero__image">
              <img src={heroImage} alt="women" />
            </div>
          </div>
        </div>
      </div>
      <TheProducts></TheProducts>
    </div>
  );
};

export default Home;