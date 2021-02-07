import React from 'react';
import {Link} from 'react-router-dom';

const NotFoundScreen = () => {
  return (
    <header className="header">
      <div className="container">
      </div>
      <h1 style={{textAlign: `center`}}>404 Page not found</h1>
      <div style={{textAlign: `center`}}>
        <Link to={`/`} >На главную</Link>
      </div>
    </header>
  );
};

export default NotFoundScreen;
