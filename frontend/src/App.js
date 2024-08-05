import React from 'react';
import Navbar from './Navbar';

const App = () => {
  return (
    <div>
      <Navbar />
      <div style={{ height: '200vh' }}>
        {/* Simulating a long page to enable scrolling */}
      </div>
    </div>
  );
};

export default App;