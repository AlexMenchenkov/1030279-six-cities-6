import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import CardsList from '/src/components/cards-list/cards-list.jsx';
import {propTypesCard} from '/src/prop-types.js';
import Header from '/src/components/header/header.jsx';
import Map from '/src/components/map/map.jsx';
import CityPanel from '/src/components/city-panel/city-panel.jsx';
import {connect} from 'react-redux';
import {fetchOffersList} from '/src/store/api-actions.js';
import LoadingScreen from '/src/components/loading-screen/loading-screen.js';
import Filter from '/src/components/filter/filter.jsx';
import {ONE, INDEXOF_FAIL_CODE, sectionsId, styleMapMain} from '/src/consts.js';

const MainScreen = ({
  offers,
  cityChecked,
  isDataLoaded,
  onLoadData,
  sortId,
  isShow
}) => {

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
  const filteredOffersonCity = offers.filter((offer) => offer.city.name === cityChecked);
  const sortByPriceLowToHigth = () => {
    sortOffersData.sort((a, b) => a.price > b.price ? ONE : INDEXOF_FAIL_CODE);
  };
  const sortByHigthToLow = (property) => {
    sortOffersData.sort((a, b) => a[property] < b[property] ? ONE : INDEXOF_FAIL_CODE);
  };
  let sortOffersData = filteredOffersonCity;

  const sortOffersFunc = () => {
    switch (sortId) {
      case sectionsId.popular :
        return filteredOffersonCity;
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
        return filteredOffersonCity;
      }
    }
  };

  sortOffersData = sortOffersFunc();

  return <div className="page page--gray page--main">
    <Header/>
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <CityPanel />
      </div>
      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">{filteredOffersonCity.length} places to stay in {cityChecked}</b>
            <Filter
              sortId={sortId}
              isShow={isShow}
            />
            <div className="cities__places-list places__list tabs__content">
              <CardsList offers={filteredOffersonCity}/>
            </div>
          </section>
          <div className="cities__right-section">
            <Map
              offers={filteredOffersonCity}
              styleMap={styleMapMain}
            />
          </div>
        </div>
      </div>
    </main>
  </div>;
};

MainScreen.propTypes = {
  offers: PropTypes.arrayOf(
      PropTypes.shape(
          propTypesCard,
      ),
  ),
  cityChecked: PropTypes.string.isRequired,
  onLoadData: PropTypes.func.isRequired,
  isDataLoaded: PropTypes.bool.isRequired,
  sortId: PropTypes.number.isRequired,
  isShow: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  cityChecked: state.cityChecked,
  isDataLoaded: state.isDataLoaded,
  offers: state.offers,
  sortId: state.sortId,
  isShow: state.isShow,
});

const mapDispatchToProps = (dispatch) => ({
  onLoadData() {
    dispatch(fetchOffersList());
  },
});

export {MainScreen};
export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);

