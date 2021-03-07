import React from 'react';
import PropTypes from 'prop-types';
import CardsList from '/src/components/cards-list/cards-list.jsx';
import {propTypesCard, propTypesMap} from '/src/prop-types.js';
import Header from '/src/components/header/header.jsx';
import Map from '/src/components/map/map.jsx';
import CityPanel from '/src/components/city-panel/city-panel.jsx';
import {connect} from 'react-redux';

const MainScreen = (props) => {
  const {offers, iconData, cityDataDefault, points, cityChecked} = props;
  const getOffersFromApi = offers.filter((offer) => offer[cityChecked]);
  const count = getOffersFromApi.map((offer) => offer[cityChecked].count);
  const coord = {
    lat: getOffersFromApi.map((offer) => offer[cityChecked].lat),
    lng: getOffersFromApi.map((offer) => offer[cityChecked].lng),
  };

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
            <b className="places__found">{count} places to stay in Amsterdam</b>
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
              <CardsList offers={getOffersFromApi} cityChecked={cityChecked}/>
            </div>
          </section>
          <Map
            points={points}
            iconData={iconData}
            cityDataDefault={cityDataDefault}
            coord={coord}
          />
        </div>
      </div>
    </main>
  </div>;
};

MainScreen.propTypes = {
  offers: PropTypes.arrayOf(
      PropTypes.objectOf(PropTypes.shape(
          propTypesCard,
      )),
  ).isRequired,
  cityChecked: PropTypes.string.isRequired,
  iconData: PropTypes.shape(
      propTypesMap.icon,
  ),
  cityDataDefault: PropTypes.shape(
      propTypesMap.city,
  ),
  points: PropTypes.arrayOf(
      PropTypes.shape(
          propTypesMap.points,
      ),
  ).isRequired,
};

const mapStateToProps = (state) => ({
  cityChecked: state.cityChecked,
});

export {MainScreen};
export default connect(mapStateToProps)(MainScreen);

