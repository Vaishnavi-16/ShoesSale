import React from 'react';

const RacingBoots = () => {
  return (
    <div>
      <div className='about_main layout_padding'>
        <div className='collection_section'>
          <div className='container'>
            <h1 className='new_text'>
              <strong>Racing Boots</strong>
            </h1>
            <p className='consectetur_text'>
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation
            </p>
          </div>
        </div>
        <div className='collectipn_section_3 layout_padding'>
          <div className='container'>
            <div className='racing_shoes'>
              <div className='row'>
                <div className='col-md-8'>
                  <div className='shoes-img3'>
                    <img src='images/connor-houtman-VxzlyJk-2to-unsplash.jpg' alt='' />
                  </div>
                  <div className='col-md-4'>
                    <div className='sale_text'>
                      <strong>
                        Sale <br />
                        <span style={{ color: '#0a0506' }}>AIR JORDAN JUMPMAN</span>
                        <br />
                        SHOES
                      </strong>
                    </div>

                    <div className='number_text'>
                      <strong>
                        $ <span style={{ color: '#0a0506' }}>100</span>
                      </strong>
                    </div>
                    <button className='seemore'>See More</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RacingBoots;
