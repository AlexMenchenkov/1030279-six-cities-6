import React from 'react';
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {AuthorizationStatus} from '/src/consts';
import {logout} from '/src/store/api-actions';
import {saveHistory} from '/src/store/action';
import {props} from './header-prop';
import {getStatusAuth} from '/src/store/user/selectors';
import {getEmail} from '/src/store/data/selectors';

const Header = ({email, statusAuth, handleLogoutSubmit, handleLogHistory}) => {

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link to={`/`} className="header__logo-link header__logo-link--active">
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                {statusAuth === AuthorizationStatus.AUTH ?
                  <>
                    <Link to={`/favorites`} className="header__nav-link header__nav-link--profile">
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                      </div>
                      <span className="header__user-name user__name">{email}</span>
                    </Link>
                    <div style={{marginTop: `20px`}}>
                      <a>
                        <span onClick={handleLogoutSubmit} className="header__user-name user__name">Выйти</span>
                      </a>
                    </div>
                  </>
                  :
                  <Link to={`/login`} onClick={() => handleLogHistory(location.pathname)} className="header__logo-link header__logo-link--active">
                    <span className="header__user-name user__name">Войти</span>
                  </Link>
                }
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = props;

const mapDispatchToProps = (dispatch) => ({
  handleLogoutSubmit() {
    dispatch(logout());
  },
  handleLogHistory(path) {
    dispatch(saveHistory(path));
  }
});

const mapStateToProps = (state) => ({
  email: getEmail(state),
  statusAuth: getStatusAuth(state),
});

export {Header};
export default React.memo(connect(mapStateToProps, mapDispatchToProps)(Header));
