import React from 'react';

const Navigation = ({ onRouteChange, isSignedIn }) => {
  if (isSignedIn) {
    return (
      <nav className='flex justify-end'>
        <button
          className='text-white py-2 px-4 rounded cursor-pointer border hover:opacity-50'
          onClick={() => onRouteChange('signout')}
        >
          Sign Out
        </button>
      </nav>
    );
  } else {
    return (
      <nav className='flex justify-end'>
        <button
          className='text-white py-2 px-4 rounded cursor-pointer border hover:opacity-50 mx-2'
          onClick={() => onRouteChange('signin')}
        >
          Sign In
        </button>
        <button
          className='text-white py-2 px-4 rounded cursor-pointer border hover:opacity-50'
          onClick={() => onRouteChange('register')}
        >
          Register
        </button>
      </nav>
    );
  }
};

export default Navigation;
