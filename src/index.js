import React from "react";
import ReactDOM from "react-dom";
import MainPage from '/src/components/main-page/main-page.jsx';


ReactDOM.render(
    // eslint-disable-next-line react/react-in-jsx-scope
    <MainPage
      title={`Cool`}
    />,
    document.getElementById(`root`)
);
