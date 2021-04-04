import React from 'react';
import {connect} from 'react-redux';
import {changeCity} from '/src/store/action';
import {props} from './city-brick-prop';

const CityBrick = ({city, changeCityDispatch, checked}) => {

  return (
    <li className="locations__item">
      <a onClick={changeCityDispatch} className={`locations__item-link tabs__item ${checked ? `tabs__item--active` : ``}`} href="#">
        <span>{city}</span>
      </a>
    </li>
  );
};

CityBrick.propTypes = props;

const mapDispatchToProps = (dispatch) => ({
  changeCityDispatch(event) {
    dispatch(changeCity(event.target.innerText));
  },
});

export {CityBrick};
export default React.memo(connect(null, mapDispatchToProps)(CityBrick));
