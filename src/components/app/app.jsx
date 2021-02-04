import React from "react";
import MainPage from '/src/components/main-page/main-page.jsx';

const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const {data} = props;
  return <
    MainPage data={data}
  />;
};

export default App;
