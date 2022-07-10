import React from 'react';
import './Contacts.sass'

const Contacts = () => {
  return (
    <div className="contacts">
      <div className="container">
        <div className="contacts__inner">
          <div className="contacts__item">
            <div className="contacts__item-left">
              <a href="tel:" className="contacts__item-phone">
                +38 (067) 127 37 21
              </a>
              <span className="contacts__item-info">Sergey Bebrenko</span>
            </div>
            <h1 className="contacts__item-title center">CONTACTS</h1>
            <div className="contacts__item-right">
              <a href="mailto:" className="contacts__item-email">
                bebra@burmalda.com
              </a>
              <span className="contacts__item-info">General Bebra</span>
            </div>
          </div>
          <div className="contacts__item">
            <div className="contacts__item-left">
              <a href="tel:" className="contacts__item-phone">
                +49 (067) 127 19 19
              </a>
              <span className="contacts__item-info">Vitya Baldezhy</span>
            </div>
            <h1 className="contacts__item-title center">
              456213, Paris,
              <br /> Vengri ST. 19
            </h1>
            <div className="contacts__item-right">
              <a href="mailto:" className="contacts__item-email">
                kaif@bebrik.com
              </a>
              <span className="contacts__item-info">General Kaifarik</span>
            </div>
          </div>
        </div>
      </div>
      <iframe
        className='contacts__map'
        src="https://yandex.ru/map-widget/v1/-/CBR1eXfYwD"
      ></iframe>
    </div>
  );
};

export default Contacts;