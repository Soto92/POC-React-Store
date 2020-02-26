import React from 'react';
import './header.css';

const Header = props => {
  return (
    <header>
      <div className='part'>
      </div>
      <div className='part'>{props.text}</div>
      <div className='part'>
        {props.children}
      </div>
    </header>
  );
};

export default Header;
