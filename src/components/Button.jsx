import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import './Button.scss';

const Button = ({children, to, primary, secondary, outlined, size, submit, ...props}) => {
  const Component = to ? Link : submit ? 'input' : 'button';
  const buttonClassnames = classNames('btn', {
    [`btn__${size}`]: size,
    btn__primary: primary,
    btn__secondary: secondary,
    outlined,
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
