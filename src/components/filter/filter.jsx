import React, {useEffect} from 'react';
import FilterSection from '/src/components/filter-section/filter-section';
import {sectionsNames} from '/src/consts';
import {connect} from "react-redux";
import {showFilter} from '/src/store/action';
import {props} from './filter-prop';

const Filter = ({sortId, showFilterPanel, showFilterDispatch}) => {
  const idFilterNode = `filter`;

  const handleSortClick = (event) => {
    if (event.target.id === idFilterNode) {
      showFilterDispatch(!showFilterPanel);
    } else if (showFilterPanel) {
      showFilterDispatch(!showFilterPanel);
    }
  };

  useEffect(() => {
    document.addEventListener(`click`, handleSortClick);
    return () => document.removeEventListener(`click`, handleSortClick);
  }, [showFilterPanel]);

  return (<form className="places__sorting" action="#" method="get">
    <span style={{marginRight: `10px`}} className="places__sorting-caption">Sort by</span>
    <span id={idFilterNode} className="places__sorting-type" tabIndex="0">
      {sectionsNames[sortId]}
      <svg className="places__sorting-arrow" width="7" height="4">
        <use xlinkHref="#icon-arrow-select"> </use>
      </svg>
    </span>
    <FilterSection
      showFilterPanel={showFilterPanel}
    />
  </form>
  );
};

Filter.propTypes = props;

const mapDispatchToProps = (dispatch) => ({
  showFilterDispatch(showFilterPanel) {
    dispatch(showFilter(showFilterPanel));
  }
});

export {Filter};
export default connect(null, mapDispatchToProps)(Filter);
