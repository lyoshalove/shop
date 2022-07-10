import React from 'react';
import './Loader.sass'

const Loader = () => {
  return (
    <div className="loader__wrapper">
      <div className="loader">
        <div className="loader__inner"></div>
      </div>
    </div>
  );
};

export default Loader;