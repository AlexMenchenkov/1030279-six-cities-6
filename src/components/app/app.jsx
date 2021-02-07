import React from 'react';
import PropTypes from 'prop-types';
import MainScreen from '/src/components/mainScreen/mainScreen.jsx';
import {getPropTypesCard} from '/src/components/card-place/card-place.jsx';

const App = (props) => {
  const {data} = props;
  return <
    MainScreen data={data}
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
