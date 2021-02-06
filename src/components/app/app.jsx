import React from "react";
import PropTypes from 'prop-types';
import MainPage from '/src/components/main-page/main-page.jsx';
import Login from '/src/components/login/login.jsx';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {propTypesCard} from '/src/components/card-place/card-place.jsx';


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
        <Route path="/login" exact>
          <
            Login
          />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  data: PropTypes.arrayOf(
      PropTypes.shape({
        propTypesCard,
      }),
  ).isRequired,
};

export default App;
