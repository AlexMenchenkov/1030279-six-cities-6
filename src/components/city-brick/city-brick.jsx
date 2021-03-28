import PropTypes from "prop-types";
import React from 'react';
import {connect} from 'react-redux';
import {ActionCreator} from '/src/store/action';

const CityBrick = ({city, onClickCity, checked}) => {

  return (
    <li className="locations__item">
      <a onClick={onClickCity} className={`locations__item-link tabs__item ${checked ? `tabs__item--active` : ``}`} href="#">
        <span>{city}</span>
      </a>
    </li>
  );
};

CityBrick.propTypes = {
  city: PropTypes.string.isRequired,
  onClickCity: PropTypes.func.isRequired,
  cityChecked: PropTypes.string,
  checked: PropTypes.bool.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onClickCity(event) {
    dispatch(ActionCreator.changeCity(event.target.innerText));
  },
});

export {CityBrick};
export default React.memo(connect(null, mapDispatchToProps)(CityBrick));
