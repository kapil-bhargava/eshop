import React, { useState } from 'react';
import Component2 from './Component2';

const Component3 = () => {
  const [message, setMessage] = useState('');

  const handleButtonClick = () => {
    setMessage('Welcome');
  };

  return (
    <div>
      <Component2 onButtonClick={handleButtonClick} />
      <div>{message}</div>
    </div>
  );
};

export default Component3;