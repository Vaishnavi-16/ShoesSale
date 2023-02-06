import React from 'react';
import { Link } from 'react-router-dom';

const Navigations = () => {
  return (
    <div className='header_section'>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-3'>
            <div className='logo'>
              <Link to='/'>
                <img src='images/logo.png' alt='shoe' />
              </Link>
            </div>
          </div>
          <div className='col-sm-9'>
            <nav className='navbar navbar-expand-lg navbar-light bg-light'>
              <button
                className='navbar-toggler'
                type='button'
                data-toggle='collapse'
                data-target='#navbarNavAltMarkup'
                aria-controls='navbarNavAltMarkup'
                aria-expanded='false'
                aria-label='Toggle navigation'
              >
                <span className='navbar-toggler-icon'></span>
              </button>
              <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
                <div className='navbar-nav'>
                  <Link to='/' className='nav-item nav-link'>
                    Home
                  </Link>

                  <Link to='/collection' className='nav-item nav-link'>
                    Collection
                  </Link>
                  <Link to='/shoes' className='nav-item nav-link'>
                    Shoes
                  </Link>
                  <Link to='/racingboots' className='nav-item nav-link'>
                    Racing Boots
                  </Link>
                  <Link to='/contact' className='nav-item nav-link'>
                    Contact
                  </Link>
                  <a className='nav-item nav-link last' href='/search'>
                    <img src='images/search_icon.png' alt='shoe' />
                  </a>
                  <a className='nav-item nav-link last' href='/contact'>
                    <img src='images/shop_icon.png' alt='shoe' />
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigations;
