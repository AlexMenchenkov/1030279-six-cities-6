import React, {useEffect, useCallback} from 'react';
import CardsList from '/src/components/cards-list/cards-list';
import Header from '/src/components/header/header';
import Map from '/src/components/map/map';
import CityPanel from '/src/components/city-panel/city-panel';
import {connect} from 'react-redux';
import {fetchOffersList} from '/src/store/api-actions';
import LoadingScreen from '/src/components/loading-screen/loading-screen';
import Filter from '/src/components/filter/filter';
import {styleMapMain} from '/src/consts';
import Footer from '/src/components/footer/footer';
import {props} from './main-screen-prop';
import {getResponseFavorites, getIsDataLoaded, getOffers} from '/src/store/data/selectors';
import {getCityChecked, getSortId, getShowFilterPanel} from '/src/store/user/selectors';

const MainScreen = ({
  storeOffers,
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

  const offers = useCallback(storeOffers, [storeOffers, sortId, cityChecked, responseFavorites]);
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
            <b className="places__found">{offers.length} places to stay in {cityChecked}</b>
            <Filter
              sortId={sortId}
              showFilterPanel={showFilterPanel}
            />
            <div className="cities__places-list places__list tabs__content">
              <CardsList
                offers={offers}
                isNotUpdateRoom={false}
                needChangeMarker={true}
              />
            </div>
          </section>
          <div className="cities__right-section">
            <Map
              offers={offers}
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

const mapStateToProps = (state) => ({
  isDataLoaded: getIsDataLoaded(state),
  responseFavorites: getResponseFavorites(state),
  storeOffers: getOffers(state),
  sortId: getSortId(state),
  cityChecked: getCityChecked(state),
  showFilterPanel: getShowFilterPanel(state),
});

const mapDispatchToProps = (dispatch) => ({
  onLoadData() {
    dispatch(fetchOffersList());
  },
});

export {MainScreen};
export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);

