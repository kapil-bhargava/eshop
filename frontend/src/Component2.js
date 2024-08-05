import React, { useState } from 'react';
import Component1 from './Component1';

const Component2 = ({ onButtonClick }) => {
  const [message, setMessage] = useState('');

  const handleClick = () => {
    setMessage('Hello');
    onButtonClick();
  };

  return (
    <div>
      <Component1 onClick={handleClick} />
      <div>{message}</div>
    </div>
  );
};

export default Component2;