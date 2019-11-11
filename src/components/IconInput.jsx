import React from 'react';
import './IconInput.scss';

export default ({ icon, ...props }) => (
  <div className='icon__input'>
    <i className={icon} />
    <input {...props} />
  </div>
);
