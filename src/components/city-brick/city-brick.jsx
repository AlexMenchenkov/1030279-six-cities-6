import React, {useRef} from 'react';
import {connect} from 'react-redux';
import {ActionCreator} from '/src/store/action.js';

const CityBrick = (props) => {
  const {city, onClickCity, cityChecked} = props;
  const checked = cityChecked === city;

  return (
    <li className="locations__item ">
      <a onClick={onClickCity} className={`locations__item-link tabs__item ${checked ? `tabs__item--active` : ``}`} href="#">
        <span>{city}</span>
      </a>
    </li>
  );
};

const mapStateToProps = (state) => ({
  cityChecked: state.cityChecked,
});

const mapDispatchToProps = (dispatch) => ({
  onClickCity(event) {
    dispatch(ActionCreator.changeCity(event.target.innerText));
  },
});

export {CityBrick};
export default connect(mapStateToProps, mapDispatchToProps)(CityBrick);
