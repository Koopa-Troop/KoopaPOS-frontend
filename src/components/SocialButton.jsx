import React from 'react'
import './SocialButton.scss';
import { Link } from 'react-router-dom';

const SocialButton = ({title, img}) => (
  <Link to='/'>
    <div className={`social__button ${title}`}>
      <img src={img} alt={`${title} login`} />
      <span>{title}</span>
    </div>
  </Link>
);

export default SocialButton;
