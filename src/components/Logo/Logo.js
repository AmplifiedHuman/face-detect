import React from 'react';
import Tilt from 'react-tilt';
import logo from './logo.png';

const Logo = () => {
  return (
    <div className='my-8 mt-4 flex justify-center'>
      <Tilt
        className='Tilt'
        options={{ max: 25 }}
        style={{ height: 150, width: 150 }}
      >
        <div className='Tilt-inner'>
          <img src={logo} alt='logo' className='rounded-md' />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
