import React from "react";
import PropTypes from 'prop-types';
import Main from '/src/components/main/main.jsx';
import {getPropTypesCard} from '/src/components/card-place/card-place.jsx';

const App = (props) => {
  const {data} = props;
  return <
    Main data={data}
  />;
};

App.propTypes = {
  data: PropTypes.arrayOf(
      PropTypes.shape({
        getPropTypesCard,
      }),
  ).isRequired,
};

export default App;
