import React from 'react';
import foodFireLogo from '../assets/foodFireLogo.png';
import { useState } from 'react';

function Header() {
  const [loginBtn, setloginBtn] = useState('login');

  return (
    <>
      <div className="header">
        <div className="logo-container">
          <img className="logo" src={foodFireLogo} alt="logo" />
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>Contact Us</li>
            <li>About us</li>
            <li>crate</li>
            <button
              onClick={() => {
                loginBtn === 'Login'
                  ? setloginBtn('Logout')
                  : setloginBtn('Login');
              }}
              className="login-btn"
            >
              {loginBtn}
            </button>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
