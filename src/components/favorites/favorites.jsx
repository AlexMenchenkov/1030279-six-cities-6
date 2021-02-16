import PropTypes from 'prop-types';
import React from 'react';
import Header from '/src/components/header/header.jsx';
import Footer from '/src/components/footer/footer.jsx';
import {CardPlace} from '/src/components/card-place/card-place.jsx';
import {propTypesCard} from '/src/consts.js';

const Favorites = (props) => {
  const {offers} = props;
  return (
    <div className="page">
      <Header/>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="#">
                      <span>Amsterdam</span>
                    </a>
                  </div>
                </div>
                <div className="favorites__places">
                  {offers.map((offer) => {
                    return (
                      <CardPlace
                        offer={offer}
                        key={offer.id}
                        id={offer.id}
                        classCard={`favorites`}
                        width={150}
                        height={110}
                      />
                    );
                  })}

                </div>
              </li>

              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="#">
                      <span>Cologne</span>
                    </a>
                  </div>
                </div>
                <div className="favorites__places">
                  {offers.map((offer) => {
                    return (
                      <CardPlace
                        offer={offer}
                        key={offer.id}
                        id={offer.id}
                        classCard={`favorites`}
                        width={150}
                        height={110}
                      />
                    );
                  })}
                </div>
              </li>
            </ul>
          </section>
        </div>
      </main>
      <Footer/>
    </div>
  );
};

Favorites.propTypes = {
  offers: PropTypes.arrayOf(
      PropTypes.shape(
          propTypesCard,
      ),
  ).isRequired,
};

export default Favorites;
