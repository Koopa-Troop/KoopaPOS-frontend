import React from 'react';
import './IconInput.scss';

export default ({ icon, ...props }) => (
  <div className='icon__input'>
    <input {...props} />
    <i className={icon} />
  </div>
);
