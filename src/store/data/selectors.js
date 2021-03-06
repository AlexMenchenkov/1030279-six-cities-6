import {sectionsId, ZERO} from '/src/consts';
import {NameSpace} from '/src/store/root-reducer';
import {getCityCheckedSelector, getSortIdSelector} from '/src/store/user/selectors';
import {sortByHigthToLow, sortByPriceLowToHigth} from '/src/utils';
import {createSelector} from 'reselect';

export const getOffersSelectorOrigin = (state) => state[NameSpace.DATA].offers;
export const getResponseFavoritesSelector = (state) => state[NameSpace.DATA].responseFavorites;

export const getOffersSelector = createSelector(
    getOffersSelectorOrigin,
    getCityCheckedSelector,
    getSortIdSelector,
    getResponseFavoritesSelector,
    (offers, cityChecked, sortId, responseFavorites) => {
      let filteredOffersOnCity = offers.filter((offer) => offer.city.name === cityChecked);
      let sortOffersData = filteredOffersOnCity;
      const sortOffersFunc = () => {
        switch (sortId) {
          case sectionsId.popular :
            return filteredOffersOnCity;
          case sectionsId.highToLow :
            return sortOffersData.sort(sortByPriceLowToHigth);
          case sectionsId.lowToHigh :
            return sortOffersData.sort(sortByHigthToLow(`price`));
          case sectionsId.rate :
            return sortOffersData.sort(sortByHigthToLow(`rating`));
          default: {
            return filteredOffersOnCity;
          }
        }
      };

      sortOffersData = sortOffersFunc();
      if (responseFavorites.length) {
        responseFavorites.forEach((favorite) => {
          filteredOffersOnCity = filteredOffersOnCity.map((offer) => {
            if (offer.id === favorite.id) {
              return favorite;
            }
            return offer;
          });
        });
      }
      return filteredOffersOnCity;
    }
);

const offersForMapSelector = () => {
  return (
    (offers) => {
      const points = offers.map((offer) => [offer.location, {id: offer.id}]);
      const location = offers.map((offer) => offer.city.location);
      const titles = offers.map((offer) => offer.title);
      const coordinatesCity = location.filter(((offer) => ({id}) => !offer.has(id) && offer.add(id))(new Set()));
      const [latitude] = coordinatesCity.map((offer) => offer.latitude);
      const [longitude] = coordinatesCity.map((offer) => offer.longitude);
      const [zoom] = coordinatesCity.map((offer) => offer.zoom);

      return {
        points,
        titles,
        latitude,
        longitude,
        zoom,
      };
    }
  );
};

export const getOfferNearbySelector = (state) => state[NameSpace.DATA].offerNearby;
export const getOffersSelectorForMapMain = createSelector(
    getOffersSelector,
    offersForMapSelector,
    (offers, func) => func(offers)
);

export const getOffersSelectorForMapRoom = createSelector(
    getOfferNearbySelector,
    offersForMapSelector,
    (offers, func) => func(offers)
);

export const getIsDataLoadedSelector = (state) => state[NameSpace.DATA].isDataLoaded;
export const getFavoritesSelector = (state) => state[NameSpace.DATA].favoritesList;
export const getIsFavoritesLoadedSelector = (state) => state[NameSpace.DATA].isFavoritesLoaded;

export const getUniqueCityesSelector = createSelector(
    getFavoritesSelector,
    (favoritesList) => {
      const cityesArray = favoritesList.map((offer) => offer.city.name);
      return [...new Set(cityesArray)];
    }
);

export const getIsNearbyLoadedSelector = (state) => state[NameSpace.DATA].isNearbyLoaded;
export const getOfferSelectorOrigin = (state) => state[NameSpace.DATA].offer;

export const getOfferSelector = createSelector(
    getResponseFavoritesSelector,
    getOfferSelectorOrigin,
    (responseFavorites, offer) => {
      const offerUpFavorite = responseFavorites.filter((elem) => elem.id === (offer && offer.id));
      if (offerUpFavorite.length) {
        return offerUpFavorite[ZERO];
      }
      return offer;
    }
);

export const getIsRoomLoadedSelector = (state) => state[NameSpace.DATA].isRoomLoaded;
export const getCommentsStoreSelector = (state) => state[NameSpace.DATA].comments;
export const getIsCommentsLoadedSelector = (state) => state[NameSpace.DATA].isCommentsLoaded;

export const getOfferNearbyForCardListSelector = createSelector(
    getOfferNearbySelector,
    getOfferSelector,
    getResponseFavoritesSelector,
    (offerNearby, offer, responseFavorites) => {
      let offersForCardList = offerNearby.filter((room) => room.id !== offer.id);
      if (responseFavorites.length) {
        responseFavorites.forEach((favorite) => {
          offersForCardList = offersForCardList.map((offerForCard) => {
            if (offerForCard.id === favorite.id) {
              return favorite;
            }
            return offerForCard;
          });
        });
      }
      return offersForCardList;
    }
);

export const getEmailSelector = (state) => state[NameSpace.DATA].data.email;
