import React from 'react';
import foodFireLogo from '../assets/foodFireLogo.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';

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
            <li>
              <Link to="">Home</Link>
            </li>
            <li>
              <Link to="/contact">Contact U</Link>s
            </li>
            <li>
              <Link to="/about">About us</Link>
            </li>
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
