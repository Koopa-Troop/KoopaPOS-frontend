import React from 'react';
import { Link } from 'react-router-dom';
import SocialButton from '../components/SocialButton';
import logo from '../assets/statics/rectlogo.svg'
import facebookLogo from '../assets/statics/social/facebook.png';
import twitterLogo from '../assets/statics/social/twitter.png';
import '../assets/styles/Login.scss';

const Login = () => (
  <>
    <header className='login__header'>
      <img className='login__header__img' src={logo} alt='Koopa POS' />
    </header>
    <section className='login__section'>
      <section className='login__container'>
        <div className='login__container__tabs'>
          <div className='selected'>
            <a href='https://google.com'>Iniciar Sesión</a>
          </div>
          <div>
            <a href='https://google.com'>Registrarse</a>
          </div>
        </div>
        <div className='login__container__form'>
          <form>
            <input type='text' name='email' placeholder='Correo' />
            <input type='password' name='password' placeholder='Contraseña' />
            <Link to='/'>
              <input type='submit' value='Iniciar Sesión' />
            </Link>
            <div className='link__forgotten__password'>
              <a href='https://google.com'>¿Olvidaste tu contraseña?</a>
            </div>
          </form>
        </div>
      </section>
      <section className='login__social'>
        <SocialButton title='facebook' img={facebookLogo}/>
        <SocialButton title='twitter' img={twitterLogo}/>
      </section>
    </section>
</>
)

export default Login;
