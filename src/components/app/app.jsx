import React from "react";
import PropTypes from 'prop-types';
import MainPage from '/src/components/main-page/main-page.jsx';
import {propTypes} from '/src/components/card-place/card-place.jsx';

const App = (props) => {
  const {data} = props;
  return <
    MainPage data={data}
  />;
};

App.propTypes = {
  data: PropTypes.arrayOf(
      PropTypes.shape({
        propTypes,
      }),
  ).isRequired,
};

export default App;
