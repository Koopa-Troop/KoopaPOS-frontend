import React from 'react';
import { Link } from 'react-router-dom';
import cx from 'classnames';
import './Button.scss';

const Button = ({ children, to, primary, secondary, outlined, size, submit, black, ...props }) => {
  const Component = to ? Link : submit ? 'input' : 'button';
  const buttonClassnames = cx('btn', {
    [`btn__${size}`]: size,
    btn__primary: primary,
    btn__secondary: secondary,
    outlined,
    btn__black: black,
  });
  return (
    <Component
      to={to}
      className={buttonClassnames}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Button;
