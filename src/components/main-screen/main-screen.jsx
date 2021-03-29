import React, {useEffect, useCallback} from 'react';
import CardsList from '/src/components/cards-list/cards-list';
import Header from '/src/components/header/header';
import Map from '/src/components/map/map';
import CityPanel from '/src/components/city-panel/city-panel';
import {connect} from 'react-redux';
import {fetchOffersList} from '/src/store/api-actions';
import LoadingScreen from '/src/components/loading-screen/loading-screen';
import Filter from '/src/components/filter/filter';
import {sectionsId, styleMapMain} from '/src/consts';
import Footer from '/src/components/footer/footer';
import {props} from './main-screen-prop';
import {sortByPriceLowToHigth, sortByHigthToLow} from '/src/utils.js';

const MainScreen = ({
  offers,
  cityChecked,
  isDataLoaded,
  onLoadData,
  sortId,
  showFilterPanel,
  responseFavorites,
}) => {

  useEffect(() => {
    if (!isDataLoaded) {
      onLoadData();
    }
  }, [isDataLoaded]);

  const getOffers = useCallback(
      () => {
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
      }, [offers, sortId, cityChecked, responseFavorites]
  );

  if (!isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (<div className="page page--gray page--main">
    <Header/>
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <CityPanel
          cityChecked={cityChecked}
        />
      </div>
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{getOffers().length} places to stay in {cityChecked}</b>
            <Filter
              sortId={sortId}
              showFilterPanel={showFilterPanel}
            />
            <div className="cities__places-list places__list tabs__content">
              <CardsList
                getOffers={getOffers}
                isNotUpdateRoom={false}
                needChangeMarker={true}
              />
            </div>
          </section>
          <div className="cities__right-section">
            <Map
              getOffers={getOffers}
              styleMap={styleMapMain}
            />
          </div>
        </div>
      </div>
    </main>
    <Footer/>
  </div>
  );
};

MainScreen.propTypes = props;

const mapStateToProps = ({USER, DATA}) => ({
  isDataLoaded: DATA.isDataLoaded,
  responseFavorites: DATA.responseFavorites,
  offers: DATA.offers,
  sortId: USER.sortId,
  cityChecked: USER.cityChecked,
  showFilterPanel: USER.showFilterPanel,
});

const mapDispatchToProps = (dispatch) => ({
  onLoadData() {
    dispatch(fetchOffersList());
  },
});

export {MainScreen};
export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);

