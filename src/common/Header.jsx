import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div class='header_section'>
      <div class='container'>
        <div class='row'>
          <div class='col-sm-3'>
            <div class='logo'>
              <Link to='/'>
                <img src='images/logo.png' alt='shoe' />
              </Link>
            </div>
          </div>
          <div class='col-sm-9'>
            <nav class='navbar navbar-expand-lg navbar-light bg-light'>
              <button
                class='navbar-toggler'
                type='button'
                data-toggle='collapse'
                data-target='#navbarNavAltMarkup'
                aria-controls='navbarNavAltMarkup'
                aria-expanded='false'
                aria-label='Toggle navigation'
              >
                <span class='navbar-toggler-icon'></span>
              </button>
              <div class='collapse navbar-collapse' id='navbarNavAltMarkup'>
                <div class='navbar-nav'>
                  <Link to='/' class='nav-item nav-link'>
                    Home
                  </Link>

                  <Link to='/collection' class='nav-item nav-link'>
                    Collection
                  </Link>
                  <Link to='/shoes' class='nav-item nav-link'>
                    Shoes
                  </Link>
                  <Link to='/racingboots' class='nav-item nav-link'>
                    Racing Boots
                  </Link>
                  <Link to='/contact' class='nav-item nav-link'>
                    Contact
                  </Link>
                  <a class='nav-item nav-link last' href='www.aliyu.com'>
                    <img src='images/search_icon.png' alt='shoe' />
                  </a>
                  <a class='nav-item nav-link last' href='contact.html'>
                    <img src='images/shop_icon.png' alt='shoe' />
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
      <div class='banner_section'>
        <div class='container-fluid'>
          <section class='slide-wrapper'>
            <div class='container-fluid'>
              <div id='myCarousel' class='carousel slide' data-ride='carousel'>
                <ol class='carousel-indicators'>
                  <li
                    data-target='#myCarousel'
                    data-slide-to='0'
                    class='active'
                  ></li>
                  <li data-target='#myCarousel' data-slide-to='1'></li>
                  <li data-target='#myCarousel' data-slide-to='2'></li>
                  <li data-target='#myCarousel' data-slide-to='3'></li>
                </ol>

                <div class='carousel-inner'>
                  <div class='carousel-item active'>
                    <div class='row'>
                      <div class='col-sm-5'>
                        <div class='banner_taital'>
                          <h1 class='banner_text'>WELCOME TO </h1>
                          <h1 class='mens_text'>
                            <strong>JASPER</strong>
                          </h1>
                          <p class='lorem_text'>
                            ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua.
                          </p>
                          <button class='buy_bt'>Buy Now</button>
                          <button class='more_bt'>See More</button>
                        </div>
                      </div>
                      <div class='col-sm-5'>
                        <div class='shoes_img'>
                          <img src='images/ox-street-BWPqHZBhMVA-unsplash.jpg' alt='shoe' />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class='carousel-item'>
                    <div class='row'>
                      <div class='col-sm-5'>
                        <div class='banner_taital'>
                          
                          <h1 class='mens_text'>
                            <strong>JASPER</strong>
                          </h1>
                          <p class='lorem_text'>
                            ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua.
                          </p>
                          <button class='buy_bt'>Buy Now</button>
                          <button class='more_bt'>See More</button>
                        </div>
                      </div>
                      <div class='col-sm-5'>
                        <div class='shoes_img'>
                          <img src='images/ox-street-BWPqHZBhMVA-unsplash.jpg' alt='shoe' />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class='carousel-item'>
                    <div class='row'>
                      <div class='col-sm-5'>
                        <div class='banner_taital'>
                          
                          <p class='lorem_text'>
                            ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua.
                          </p>
                          <button class='buy_bt'>Buy Now</button>
                          <button class='more_bt'>See More</button>
                        </div>
                      </div>
                      <div class='col-sm-5'>
                        <div class='shoes_img'>
                          <img src='images/jeff-tumale-SD9Jyl1xNQ4-unsplash.jpg' alt='shoe' />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class='carousel-item'>
                    <div class='row'>
                      <div class='col-sm-5'>
                        <div class='banner_taital'>
                          
                          
                          <p class='lorem_text'>
                            ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua.
                          </p>
                          <button class='buy_bt'>Buy Now</button>
                          <button class='more_bt'>See More</button>
                        </div>
                      </div>
                      <div class='col-sm-5'>
                        <div class='shoes_img'>
                          <img src='images/jeff-tumale-SD9Jyl1xNQ4-unsplash.jpg' alt='shoe' />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Header;
