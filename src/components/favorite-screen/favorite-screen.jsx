import React, {useEffect} from 'react';
import Header from '/src/components/header/header';
import Footer from '/src/components/footer/footer';
import FavoriteCityList from '/src/components/favorite-city-list/favorite-city-list';
import {connect} from "react-redux";
import LoadingScreen from '/src/components/loading-screen/loading-screen';
import {fetchFavoritesList} from '/src/store/api-actions';
import {props} from './favorite-screen-prop';
import {getFavoritesListSelector, getIsFavoritesLoadedSelector, getResponseFavoritesSelector} from '/src/store/data/selectors';

const FavoritesScreen = ({favoritesList, isFavoritesLoaded, onLoadFavorites, responseFavorites}) => {

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

  const cityesArray = favoritesList.map((offer) => offer.city.name);
  const uniqueCityes = [...new Set(cityesArray)];
  if (responseFavorites.length) {
    responseFavorites.forEach((favorite) => {
      favoritesList = favoritesList.map((offer) => {
        if (offer.id === favorite.id) {
          return favorite;
        }
        return offer;
      });
    });
  }

  favoritesList = favoritesList.filter((offer) => offer.isFavorite === true);

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
  favoritesList: getFavoritesListSelector(state),
  isFavoritesLoaded: getIsFavoritesLoadedSelector(state),
  responseFavorites: getResponseFavoritesSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  onLoadFavorites() {
    dispatch(fetchFavoritesList());
  },
});

export {FavoritesScreen};
export default connect(mapStateToProps, mapDispatchToProps)(FavoritesScreen);
