import React from 'react';
import { NavLink } from 'react-router-dom';
import SocialButton from '../components/SocialButton';
import IconInput from '../components/IconInput';
import Button from '../components/Button';
import logo from '../assets/statics/logo.svg';
import '../assets/styles/Login.scss';

const Login = ({ match }) => (
  <>
    <header className='login__header'>
      <picture className='login__header__picture'>
        <img className='login__header__img' src={logo} alt='Koopa POS' />
      </picture>
      <div className='login__header__tabs'>
        <NavLink to='/login' className='login__header__tab' activeClassName='active'>
          iniciar sesión
        </NavLink>
        <NavLink to='/sign' className='login__header__tab' activeClassName='active'>
          registrarse
        </NavLink>
      </div>
    </header>
    { match.path === '/login' && <LoginForm /> }
    { match.path === '/sign' && <SignForm /> }
    <div className='login__social__buttons'>
      <SocialButton name='google' />
      <SocialButton name='facebook' />
      <SocialButton name='twitter' />
    </div>
    <footer className='login__footer'>
      Made with &nbsp;
      <i className='fas fa-heart' />
      &nbsp; in Platzi JS school
    </footer>
  </>
);

const LoginForm = () => {
  return (
    <form className='login__form'>
      <IconInput
        type='email'
        name='email'
        pattern='[^ @]*@[^ @]*'
        placeholder='Correo'
      />
      <IconInput
        type='password'
        name='password'
        placeholder='Contraseña'
      />
      <div className='login__form__forgot'>¿Olvidaste tu contraseña?</div>
      <div className='login__form__send'>
        <Button type='submit' black>Iniciar sesión</Button>
      </div>
      <div className='login__form__option'>o iniciar con</div>
    </form>
  );
};

const SignForm = () => {
  return (
    <form className='login__form'>
      <IconInput
        type='text'
        name='fullname'
        placeholder='Nombre Completo'
      />
      <IconInput
        type='email'
        name='email'
        pattern='[^ @]*@[^ @]*'
        placeholder='Correo'
      />
      <IconInput
        type='password'
        name='password'
        placeholder='Contraseña'
      />
      <div className='login__form__send'>
        <Button type='submit' black>Registrarse</Button>
      </div>
      <div className='login__form__option'>o registrarse con</div>
    </form>
  );
}

export default Login;
