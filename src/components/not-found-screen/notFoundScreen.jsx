import React from 'react';
import {Link} from 'react-router-dom';
import Header from '/src/components/header/header';

const NotFoundScreen = () => {
  return (<>
    <Header/>
    <div className="container">
    </div>
    <h1 style={{textAlign: `center`}}>404 Page not found</h1>
    <div style={{textAlign: `center`}}>
      <Link to={`/`} >На главную</Link>
    </div>
  </>
  );
};

export default NotFoundScreen;
