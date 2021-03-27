import PropTypes from "prop-types";
import React from 'react';
import FilterSection from '/src/components/filter-section/filter-section';
import {sectionsNames} from '/src/consts';
import {connect} from "react-redux";
import {ActionCreator} from '/src/store/action';

const Filter = ({sortId, isShow, showFilterDispatch}) => {

  const handleSortClick = () => {
    showFilterDispatch(!isShow);
  };

  return (<form className="places__sorting" action="#" method="get">
    <span style={{marginRight: `10px`}} className="places__sorting-caption">Sort by</span>
    <span onClick={handleSortClick} className="places__sorting-type" tabIndex="0">
      {sectionsNames[sortId]}
      <svg className="places__sorting-arrow" width="7" height="4">
        <use xlinkHref="#icon-arrow-select"> </use>
      </svg>
    </span>
    <FilterSection
      isShow={isShow}
    />
  </form>
  );
};

Filter.propTypes = {
  sortId: PropTypes.number.isRequired,
  isShow: PropTypes.bool.isRequired,
  showFilterDispatch: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  showFilterDispatch(isShow) {
    dispatch(ActionCreator.showFilter(isShow));
  }
});

export {Filter};
export default connect(null, mapDispatchToProps)(Filter);
