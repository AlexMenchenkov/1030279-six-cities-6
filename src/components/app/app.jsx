import React from "react";
import PropTypes from 'prop-types';
import MainPage from '/src/components/main-page/main-page.jsx';
import {propTypes} from '/src/components/card-place/card-place.jsx';
import {BrowserRouter, Route, Switch} from "react-router-dom";

const App = (props) => {
  const {data} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <
            MainPage data={data}
          />
        </Route>
        <Route path="/about" exact>
          <
            MainPage data={data}
          />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  data: PropTypes.arrayOf(
      PropTypes.shape({
        propTypes,
      }),
  ).isRequired,
};

export default App;
