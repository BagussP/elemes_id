import React from 'react'

const Button = ({ text, className,handleClick = null }) => {
  return <button onClick={handleClick} className={className}>{text}</button>;
};

export default Button