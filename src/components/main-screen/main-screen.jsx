import React, {useEffect, useCallback} from 'react';
import CardsList from '/src/components/cards-list/cards-list';
import Header from '/src/components/header/header';
import Map from '/src/components/map/map';
import CityPanel from '/src/components/city-panel/city-panel';
import {connect} from 'react-redux';
import {fetchOffersList} from '/src/store/api-actions';
import LoadingScreen from '/src/components/loading-screen/loading-screen';
import Filter from '/src/components/filter/filter';
import {ONE, INDEXOF_FAIL_CODE, sectionsId, styleMapMain} from '/src/consts';
import Footer from '/src/components/footer/footer';
import {props} from './main-screen-prop';

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
        const sortByPriceLowToHigth = () => {
          sortOffersData.sort((a, b) => a.price > b.price ? ONE : INDEXOF_FAIL_CODE);
        };
        const sortByHigthToLow = (property) => {
          sortOffersData.sort((a, b) => a[property] < b[property] ? ONE : INDEXOF_FAIL_CODE);
        };
        let sortOffersData = filteredOffersOnCity;

        const sortOffersFunc = () => {
          switch (sortId) {
            case sectionsId.popular :
              return filteredOffersOnCity;
            case sectionsId.highToLow :
              sortByPriceLowToHigth(sortOffersData);
              return sortOffersData;
            case sectionsId.lowToHigh :
              sortByHigthToLow(`price`);
              return sortOffersData;
            case sectionsId.rate :
              sortByHigthToLow(`rating`);
              return sortOffersData;
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

