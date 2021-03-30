import React, {useRef} from 'react';
import {connect} from "react-redux";
import {login} from '/src/store/api-actions';
import {AppRoute, AuthorizationStatus} from '/src/consts';
import {Redirect} from "react-router-dom";
import {props} from './login-screen-prop';
import {getStatusAuthSelector} from '/src/store/user/selectors';

const LoginScreen = ({onAuthSubmit, statusAuth}) => {

  if (statusAuth === AuthorizationStatus.AUTH) {
    return (
      <Redirect to={AppRoute.ROOT}/>
    );
  }

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    onAuthSubmit({
      login: emailRef.current.value,
      password: passwordRef.current.value,
    });
  };

  return (
    <div className="page page--gray page--login">
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form onSubmit={handleSubmit} className="login__form form" action="#" method="post">
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input ref={emailRef} className="login__input form__input" type="email" name="email" placeholder="Email" required=""/>
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input ref={passwordRef} className="login__input form__input" type="password" name="password" placeholder="Password"
                  required=""/>
              </div>
              <button className="login__submit form__submit button" type="submit">Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>Amsterdam</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

LoginScreen.propTypes = props;

const mapStateToProps = (state) => ({
  statusAuth: getStatusAuthSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  onAuthSubmit(authData) {
    dispatch(login(authData));
  }
});

export {LoginScreen};
export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
