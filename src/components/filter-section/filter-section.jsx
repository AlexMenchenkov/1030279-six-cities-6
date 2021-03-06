import React from 'react';
import {sectionsNames} from '/src/consts';
import {connect} from "react-redux";
import {showFilter, sortOffers} from '/src/store/action';
import {props} from './filter-section-prop';
import {getSortIdSelector} from '/src/store/user/selectors';

const FilterSection = ({showFilterPanel, showFilterDispatch, sortDispatch}) => {

  const handleSortClick = (event) => {
    const sortId = event.currentTarget.tabIndex;
    showFilterDispatch(!showFilterPanel);
    sortDispatch(sortId);
  };

  if (!showFilterPanel) {
    return (<></>);
  }

  return (<>
    <div className="places__sorting">
      <ul className="places__options places__options--custom places__options--opened">
        {sectionsNames.map((section, index) => {
          return (
            <li onClick={handleSortClick} key={index} className="places__option places__option--active" tabIndex={index}>{section}</li>
          );
        })}
      </ul>
    </div>
  </>
  );
};

FilterSection.propTypes = props;

const mapStateToProps = (state) => ({
  sortId: getSortIdSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  showFilterDispatch(showFilterPanel) {
    dispatch(showFilter(showFilterPanel));
  },
  sortDispatch(sortId) {
    dispatch(sortOffers(sortId));
  }
});

export {FilterSection};
export default connect(mapStateToProps, mapDispatchToProps)(FilterSection);
