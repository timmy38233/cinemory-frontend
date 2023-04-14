import React from 'react';
import logoPath from './assets/cinemoryLogo.svg';

import './Header.scss';

function Header() {
  return (
    <div className='Header'>
      <div className='Header__logo'>
        <a href='/'><img src={logoPath} alt='cinemory logo' /></a>
      </div>
    </div>
  )
}

export default Header