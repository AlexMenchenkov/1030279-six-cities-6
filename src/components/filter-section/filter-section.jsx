import PropTypes from "prop-types";
import React from 'react';
import {sectionsNames} from '/src/consts.js';
import {connect} from "react-redux";
import {ActionCreator} from '/src/store/action.js';

const FilterSection = ({isShow, showFilterDispatch, sortDispatch}) => {

  const selectedHandle = (event) => {
    const sortId = event.currentTarget.tabIndex;
    showFilterDispatch(!isShow);
    sortDispatch(sortId);
  };

  if (!isShow) {
    return (<></>);
  }

  return (<>
    <div className="places__sorting">
      <ul className="places__options places__options--custom places__options--opened">
        {sectionsNames.map((section, index) => {
          return (
            <li onClick={selectedHandle} key={index} className="places__option places__option--active" tabIndex={index}>{section}</li>
          );
        })}
      </ul>
    </div>
  </>
  );
};

FilterSection.propTypes = {
  isShow: PropTypes.bool.isRequired,
  showFilterDispatch: PropTypes.func.isRequired,
  sortDispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  sortId: state.sortId,
});

const mapDispatchToProps = (dispatch) => ({
  showFilterDispatch(isShow) {
    dispatch(ActionCreator.showFilter(isShow));
  },
  sortDispatch(sortId) {
    dispatch(ActionCreator.sortOffers(sortId));
  }
});

export {FilterSection};
export default connect(mapStateToProps, mapDispatchToProps)(FilterSection);
