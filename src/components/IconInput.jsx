import React from 'react';
import cx from 'classnames';
import './IconInput.scss';

const iOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);

export default ({ icon, size, ...props }) => {
  const iconInputClassName = cx('icon__input', {
    [`input__${size}`]: size,
    ios__platform: iOS,
    not__icon: !icon,
  });

  return (
    <div className={iconInputClassName}>
      { icon && <i className={cx(icon, 'fa-2x')} /> }
      <input {...props} />
    </div>
  );
};
