import React, { useEffect, useState } from 'react';
import $ from 'jquery'
import './../css/header.css'
import { Link } from 'react-router-dom';

const NavbarComponent = () => {

  const data = [
    {
      id:1,
      name:'ap',
      email:'ap@gmail.com',
      address : 'rk nagar'
    }
  ]


    return (
        <>
            <nav className="navbar navbar-default w3ls navbar-fixed-top">
          <div className="container-fluid">
            <div className="navbar-header wthree nav_2">
              <button type="button" className="navbar-toggle collapsed navbar-toggle1" data-toggle="collapse" data-target="#bs-megadropdown-tabs">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
              <a className="navbar-brand agileinfo" href="index.html"><img src="images/images/manmandir-logo.png" style={{width: '100px'}} alt="" /></a>
              <ul className="w3header-cart">
                <li className="wthreecartaits"><span className="my-cart-icon"><i className="fa fa-cart-arrow-down" aria-hidden="true" /><span className="badge badge-notify my-cart-badge" /></span></li>
              </ul>
            </div>
            <div id="bs-megadropdown-tabs" className="navbar-collapse collapse">
              <ul className="nav navbar-nav">
                <li className="dropdown">
                  <a href="index.html"><span>Home
                    </span></a>
                </li>
                <li className="dropdown">
                  <a href="#" className="dropdown-toggle hyper" data-toggle="dropdown"><span> Gowns
                    </span></a>
                  <ul className="dropdown-menu multi multi2">
                    <div className="row">
                      <div className="col-sm-6 w3layouts-nav-agile w3layouts-womens-nav-agileits w3layouts-womens-nav-agileits-1">
                        <ul className="multi-column-dropdown">
                          <li><Link to={{pathname:'/products',state:data}} >Western Bridal</Link></li>
                          <li><a href="Product-page.html">Western Non Bridal Gowns</a></li>
                          <li><a href="Product-page.html">Indo Western Bridal</a></li>
                          <li><a href="Product-page.html">Indo Western Non Bridal</a></li>
                        </ul>
                      </div>
                      <div className="col-sm-6 w3layouts-nav-agile w3layouts-womens-nav-agileits w3layouts-womens-nav-agileits-2">											
                        <a href="Product-page.html"><img src="images/images/banner/nav-gown.jpg" alt="" /></a>
                      </div>
                    </div>										
                  </ul>
                </li>
                <li className="dropdown">
                  <a href="#" className="dropdown-toggle hyper" data-toggle="dropdown"><span> Lehangas
                    </span></a>
                    <ul className="dropdown-menu multi multi2">
                    <div className="row">
                      <div className="col-sm-6 w3layouts-nav-agile w3layouts-womens-nav-agileits w3layouts-womens-nav-agileits-1">
                        <ul className="multi-column-dropdown">
                        <li><Link to="/products">Bridal Lehangas</Link></li>
                          <li><a href="Product-page.html">Bridesmaid Lehangas</a></li>
                          <li><a href="Product-page.html">Cape Lehangas</a></li>
                          <li><a href="Product-page.html">Crop Tops &amp; Skirts</a></li>
                          <li><a href="Product-page.html">Printed Lehangas</a></li>
                          <li><a href="Product-page.html">Jacket LEhangas</a></li>
                        </ul>
                      </div>
                      <div className="col-sm-6 w3layouts-nav-agile w3layouts-womens-nav-agileits w3layouts-womens-nav-agileits-2">											
                        <a href="Product-page.html"><img src="images/images/lehangas/tempimg/lehanga-1.jpg" alt="" /></a>
                      </div>
                    </div>										
                  </ul>
                 
                </li>
                

                <li class="dropdown">
								<Link to="/newArrivals"><span>New Arrivals
									</span></Link>
							</li>
							<li class="dropdown">
								<Link to="/bestSeller"><span>Best Seller
									</span></Link>
							</li>
                
                <ul className="nav justify-content-end all-icons">
                  <li className="dropdown search">
                  <form>
                  <div class="form-group mb-4 search_box_parent">
                      <input type="search" placeholder="What're you searching for?" aria-describedby="button-addon" class="form-control border-primary" />
                      <div className="input-group-append search_box_child">
                          <button id="button-addon1" type="submit" className="btn btn-link text-primary"><i className="fa fa-search" /></button>
                      </div>

                  </div>
                </form>
                 
                    {/* <form action="#" method="post">
                      <input type="search" name="Search" placeholder="Search for a Product" required />
                      <button type="submit" className="btn btn-default search" aria-label="Left Align">
                        <i className="fa fa-search" aria-hidden="true" />
                      </button>
                    </form> */}
                  </li>
                  <li className="dropdown cart">
                    <form action="#" method="post" className="last">
                      <input type="hidden" name="cmd" defaultValue="_cart" />
                      <input type="hidden" name="display" defaultValue={1} />
                      <button className="w3view-cart" type="submit" name="submit" value><i className="fa fa-cart-arrow-down" aria-hidden="true" /></button>
                    </form>
                  </li>
                  <li className="dropdown wish-list"><a className="popup-with-zoom-anim" href="#popup-1">
                      <form action="#" method="post" className="last">
                        <input type="hidden" name="cmd" defaultValue="_wishlist" />
                        <input type="hidden" name="display" defaultValue={1} />
                        <button onclick="togglePopup()"><i className="fa fa-heart" aria-hidden="true" /></button>
                      </form>
                    </a>
                  </li>
                  <li className="dropdown user"> <a className="popup-with-zoom-anim" href="#small-dialog1">
                      <form action="#" method="post" className="last">
                        <input type="hidden" name="cmd" defaultValue="_user" />
                        <input type="hidden" name="display" defaultValue={1} />
                        <button className="w3view-cart" type="submit" name="submit" value><i className="fa fa-user" aria-hidden="true" /></button>
                      </form>
                    </a>
                  </li>
                </ul>
              </ul></div>
          </div>
        </nav>
        </>
    )
}

export default NavbarComponent
