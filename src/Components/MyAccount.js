import React from 'react'
import Navbar from '../assets/Navbar';
import Footer from '../assets/Footer';

const MyAccount = () => {
    return (
        <>
         <div className="agileheader" id="agileitshome">
             {/* Navigation */}
             <Navbar />
        
        {/* end Navigation */}
        <div class="agileheader-topbar">
    
        </div>
        <div class='agileheader-banner'>
                <img src='images/images/banner/2.jpg' alt='Groovy Apparel' />
            </div>
         </div>
           <div className="banner-bootom-w3-agileits">
        <div className="container-fluid">
          <div className="container">
            <div className="row">
              <div className="page-title-wrapper">
                <h1 className="page-title">
                  <span className="base" data-ui-id="page-title-wrapper">Your Account</span>
                </h1>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-12 col-md-12 col-sm-12">
                <div className="col-xl-4 col-md-4 col-sm-12">
                  <div className="order">
                    <div className="row ml-mr">
                      <table>
                        <tbody><tr>
                            <td><img src="images/images/icons/cardboard-box-icon.jpg" className="order-img-product" /></td>
                            <td>
                              <div className="row">
                                <h4>Your Orders</h4>
                                <p style={{paddingLeft: '30px'}}>Track, return, or buy things again </p>
                              </div>													
                            </td>
                          </tr>
                        </tbody></table>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-md-4 col-sm-12">
                  <div className="order">
                    <div className="row ml-mr">
                      <table>
                        <tbody><tr>
                            <td><img src="images/images/icons/user-profile.png" className="order-img-product" /></td>
                            <td>
                              <div className="row">
                                <h4>Login &amp; Security</h4>
                                <p style={{paddingLeft: '30px'}}>Edit login, name, and mobile number </p>
                              </div>
                            </td>
                          </tr>
                        </tbody></table>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-md-4 col-sm-12">
                  <div className="order">
                    <div className="row ml-mr">
                      <table>
                        <tbody><tr>
                            <td><img src="images/images/icons/address.jpg" className="order-img-product" /></td>
                            <td>
                              <div className="row">
                                <h4>Your Address</h4>
                                <p style={{paddingLeft: '30px'}}>Edit addresses for orders and gifts</p>
                              </div>
                            </td>
                          </tr>
                        </tbody></table>
                    </div>
                  </div>
                </div>	
                <div className="col-xl-4 col-md-4 col-sm-12">
                  <div className="order">
                    <div className="row ml-mr">
                      <table>
                        <tbody><tr>
                            <td><img src="images/images/gowns/1front.JPG" className="order-img-product" /></td>
                            <td>
                              <div className="row">
                                <h4>Edit Profile</h4>
                                <p style={{paddingLeft: '30px'}}>Edit Profile image, &amp; Profile name</p>
                              </div>
                            </td>
                          </tr>
                        </tbody></table>
                    </div>
                  </div>
                </div>
              </div>
            </div>                
          </div>
        </div>
      </div> 
      <Footer />
        </>
    )
}

export default MyAccount
