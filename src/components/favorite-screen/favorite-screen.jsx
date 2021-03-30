import React, {useEffect} from 'react';
import Header from '/src/components/header/header';
import Footer from '/src/components/footer/footer';
import FavoriteCityList from '/src/components/favorite-city-list/favorite-city-list';
import {connect} from "react-redux";
import LoadingScreen from '/src/components/loading-screen/loading-screen';
import {fetchFavoritesList} from '/src/store/api-actions';
import {props} from './favorite-screen-prop';
import {getFavoritesSelector, getUniqueCityesSelector, getIsFavoritesLoadedSelector, getResponseFavoritesSelector} from '/src/store/data/selectors';

const FavoritesScreen = ({favoritesList, isFavoritesLoaded, onLoadFavorites, responseFavorites, uniqueCityes}) => {

  useEffect(() => {
    if (!isFavoritesLoaded || responseFavorites.length) {
      onLoadFavorites();
    }
  }, [responseFavorites]);

  if (!isFavoritesLoaded) {
    return (
      <LoadingScreen />
    );
  }

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

FavoritesScreen.propTypes = props;

const mapStateToProps = (state) => ({
  favoritesList: getFavoritesSelector(state),
  isFavoritesLoaded: getIsFavoritesLoadedSelector(state),
  uniqueCityes: getUniqueCityesSelector(state),
  responseFavorites: getResponseFavoritesSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  onLoadFavorites() {
    dispatch(fetchFavoritesList());
  },
});

export {FavoritesScreen};
export default connect(mapStateToProps, mapDispatchToProps)(FavoritesScreen);
