import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import CardsList from '/src/components/cards-list/cards-list.jsx';
import {propTypesCard, propTypesMap} from '/src/prop-types.js';
import Header from '/src/components/header/header.jsx';
import Map from '/src/components/map/map.jsx';
import CityPanel from '/src/components/city-panel/city-panel.jsx';
import {connect} from 'react-redux';
import {fetchCityList} from '/src/store/api-actions.js';
import LoadingScreen from '/src/components/loading-screen/loading-screen.js';

const MainScreen = (props) => {
  const {isDataLoaded, onLoadData} = props;

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
  const {offers, iconData, cityChecked} = props;
  const filteredCities = offers.filter((offer) => offer.city.name === cityChecked);

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
            <b className="places__found">{2} places to stay in Amsterdam</b>
            <form className="places__sorting" action="#" method="get">
              <span className="places__sorting-caption">Sort by</span>
              <span className="places__sorting-type" tabIndex="0">
                  Popular
                <svg className="places__sorting-arrow" width="7" height="4">
                  <use xlinkHref="#icon-arrow-select"> </use>
                </svg>
              </span>
              <ul className="places__options places__options--custom places__options--opened">
                <li className="places__option places__option--active" tabIndex="0">Popular</li>
                <li className="places__option" tabIndex="0">Price: low to high</li>
                <li className="places__option" tabIndex="0">Price: high to low</li>
                <li className="places__option" tabIndex="0">Top rated first</li>
              </ul>
            </form>
            <div className="cities__places-list places__list tabs__content">
              <CardsList offers={filteredCities} cityChecked={cityChecked}/>
            </div>
          </section>
          <Map
            offers={filteredCities}
            iconData={iconData}
          />
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
  iconData: PropTypes.shape(
      propTypesMap,
  ).isRequired,
  onLoadData: PropTypes.func.isRequired,
  isDataLoaded: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  cityChecked: state.cityChecked,
  isDataLoaded: state.isDataLoaded,
  offers: state.offers,
});

const mapDispatchToProps = (dispatch) => ({
  onLoadData() {
    dispatch(fetchCityList());
  },
});

export {MainScreen};
export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);

