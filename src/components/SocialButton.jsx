import React from 'react';
import './SocialButton.scss';
import facebook from '../assets/statics/social/facebook.svg';
import google from '../assets/statics/social/google.svg';
import twitter from '../assets/statics/social/twitter.svg';

const logos = {
  'facebook': facebook,
  'google': google,
  'twitter': twitter
}

const SocialButton = ({ name }) => (
  <picture className={`social__button ${name}`}>
    <img src={logos[name]} alt={`${name} login`} />
  </picture>
);

export default SocialButton;
