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
  const filteredOffersonCity = offers.filter((offer) => offer.isFavorite === true);
  return (
    <div className="page">
      <Header/>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">{filteredOffersonCity.length ? `Saved listing` : `Nothing yet saved`}</h1>
            <ul className="favorites__list">
              <li className="favorites__locations-items">
                {filteredOffersonCity.length ? `<div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="#">
                      <span>Amsterdam</span>
                    </a>
                  </div>
                </div>`
                  : ``}
                <div className="favorites__places">
                  {filteredOffersonCity.map((offer) => {
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
