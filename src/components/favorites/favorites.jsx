import PropTypes from 'prop-types';
import React, {useEffect} from 'react';
import Header from '/src/components/header/header.jsx';
import Footer from '/src/components/footer/footer.jsx';
import CardPlace from '/src/components/card-place/card-place.jsx';
import {propTypesCard} from '/src/prop-types.js';
import {connect} from "react-redux";
import LoadingScreen from '/src/components/loading-screen/loading-screen.js';
import {fetchOffersList} from '/src/store/api-actions.js';

const Favorites = ({offers, isDataLoaded, onLoadData}) => {

  useEffect(() => {
    if (!isDataLoaded) {
      onLoadData();
    }
  }, [isDataLoaded]);

  if (!isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  const cityesArray = offers.map((offer) => offer.city.name);
  const uniqueCityes = [...new Set(cityesArray)];

  return (
    <div className="page">
      <Header/>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">{offers.length ? `Saved listing` : `Nothing yet saved`}</h1>
            <ul className="favorites__list">
              {uniqueCityes.map((city, index) => {
                return (
                  <li key={index} className="favorites__locations-items">
                    <div className="favorites__locations locations locations--current">
                      <div className="locations__item">
                        <a className="locations__item-link" href="#">
                          <span>{city}</span>
                        </a>
                      </div>
                    </div>
                    <div className="favorites__places">
                      {offers.map((offer) => {
                        if (offer.city.name === city) {
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
                        }
                        return ``;
                      })}
                    </div>
                  </li>
                );
              })}
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
  ),
  isDataLoaded: PropTypes.bool.isRequired,
  onLoadData: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  offers: state.offers,
  isDataLoaded: state.isDataLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  onLoadData() {
    dispatch(fetchOffersList());
  },
});

export {Favorites};
export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
