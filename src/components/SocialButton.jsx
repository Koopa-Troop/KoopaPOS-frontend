import React from 'react'
import './SocialButton.scss';

const SocialButton = ({title, img}) => (
  <div className={`social__button ${title}`}>
    <img src={img} alt={`${title} login`} />
    <span>{title}</span>
  </div>
);

export default SocialButton;
