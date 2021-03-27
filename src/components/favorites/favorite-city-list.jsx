import PropTypes from 'prop-types';
import React, {useEffect} from 'react';
import Header from '/src/components/header/header';
import Footer from '/src/components/footer/footer';
import CardPlace from '/src/components/card-place/card-place';
import {propTypesCard} from '/src/prop-types';
import {connect} from "react-redux";
import LoadingScreen from '/src/components/loading-screen/loading-screen';
import {fetchFavoritesList} from '/src/store/api-actions';

const FavoriteCityList = ({favoritesList, isFavoritesLoaded, onLoadFavorites}) => {

  useEffect(() => {
    if (!isFavoritesLoaded) {
      onLoadFavorites();
    }
  }, [isFavoritesLoaded]);

  if (!isFavoritesLoaded) {
    return (
      <LoadingScreen />
    );
  }

  const cityesArray = favoritesList.map((offer) => offer.city.name);
  const uniqueCityes = [...new Set(cityesArray)];

  return (
    <div className="page">
      <Header/>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">{favoritesList.length ? `Saved listing` : `Nothing yet saved`}</h1>
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
                      {favoritesList.map((offer) => {
                        if (offer.city.name === city) {
                          return (
                            <CardPlace
                              offer={offer}
                              key={offer.id}
                              id={offer.id}
                              isFavoritePage={true}
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
  favoritesList: PropTypes.arrayOf(
      PropTypes.shape(
          propTypesCard,
      ),
  ),
  isFavoritesLoaded: PropTypes.bool,
  onLoadFavorites: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  favoritesList: state.favoritesList,
  isFavoritesLoaded: state.isFavoritesLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  onLoadFavorites() {
    dispatch(fetchFavoritesList());
  },
});

export {FavoriteCityList};
export default connect(mapStateToProps, mapDispatchToProps)(FavoriteCityList);
