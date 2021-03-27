import PropTypes from 'prop-types';
import React, {useEffect} from 'react';
import Header from '/src/components/header/header';
import Footer from '/src/components/footer/footer';
import FavoriteCityList from '/src/components/favorite-screen/favorite-city-list';
import {propTypesCard} from '/src/prop-types';
import {connect} from "react-redux";
import LoadingScreen from '/src/components/loading-screen/loading-screen';
import {fetchFavoritesList} from '/src/store/api-actions';
import {ActionCreator} from '/src/store/action';

const FavoritesScreen = ({favoritesList, isFavoritesLoaded, onLoadFavorites, changeHoverEffectDispatch}) => {

  useEffect(() => {
    changeHoverEffectDispatch(false);
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
                const favoritesListFiltered = favoritesList.filter((offer) => offer.city.name === city);
                return (
                  <FavoriteCityList
                    key={index}
                    city={city}
                    favoriteOffers={favoritesListFiltered}
                  />
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

FavoritesScreen.propTypes = {
  favoritesList: PropTypes.arrayOf(
      PropTypes.shape(
          propTypesCard,
      ),
  ),
  isFavoritesLoaded: PropTypes.bool,
  onLoadFavorites: PropTypes.func.isRequired,
  changeHoverEffectDispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  favoritesList: state.favoritesList,
  isFavoritesLoaded: state.isFavoritesLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  onLoadFavorites() {
    dispatch(fetchFavoritesList());
  },
  changeHoverEffectDispatch(needChangeMarker) {
    dispatch(ActionCreator.changeHoverEffect(needChangeMarker));
  },
});

export {FavoritesScreen};
export default connect(mapStateToProps, mapDispatchToProps)(FavoritesScreen);
