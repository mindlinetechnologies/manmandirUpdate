import React,{useEffect} from 'react';
import Navbar from '../assets/Navbar';
import Footer from '../assets/Footer';
import './../css/orderHistory.css'
import {useHistory} from 'react-router-dom';
const OrderHistory = () => {
  let history = useHistory();
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    }
},[])

    return (
        <>
              <div className="agileheader" id="agileitshome">
                   {/* Navigation */}
                 <Navbar />
                  {/* end Navigation */}
                <div class="agileheader-topbar">
            
                </div>

            
            
                <div class="w3slideraits">
				<div class="fluid_dg_wrap fluid_dg_emboss pattern_1 fluid_dg_white_skin" id="fluid_dg_wrap_4">
					<div data-thumb="images/images/banner/7.jpg" data-src="images/images/banner/7.jpg"></div>
					<div data-thumb="images/images/banner/5.jpg" data-src="images/images/banner/5.jpg"></div>
					<div data-thumb="images/images/banner/6.jpg" data-src="images/images/banner/6.jpg"></div>
					<div data-thumb="images/images/banner/4.jpg" data-src="images/images/banner/4.jpg"></div>
					<div data-thumb="images/images/banner/KARISHMA(1).jpg"
						data-src="images/images/banner/KARISHMA(1).jpg"></div>
				</div>
			</div>


              </div>

              <div className="banner-bootom-w3-agileits">
        <div className="container-fluid">
          <div className="container">
            <div className="row">
              <div className="page-title-wrapper">
                <h1 className="page-title">
                  <span className="base" data-ui-id="page-title-wrapper">Order History</span>
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
                            <td><img src="images/images/gowns/1front.JPG" className="order-img-product" /></td>
                            <td>
                              <div className="row">
                                <p className="order-product-name">Anni Designer Women's Rama Color Banarasi Silk Saree With
                                  Blouse Piece</p>
                                <p className="order-product-name-mobile">Anni Designer Women's Rama Color Banarasi...</p>
                              </div>
                              <div className="row">
                                <p className="order-product-price">Price: ₹ 499.00</p>
                              </div>
                              <div className="row">
                                <p className="delivery-date">Delivered on 30 Aug, 2021</p>
                              </div>
                              <div className="row">
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
                                <p className="order-product-name">Navy Blue Kurti Set With Bandhani Foil Printed Chevron Design And Off White Skirt</p>
                                <p className="order-product-name-mobile">Navy Blue Kurti Set With Bandhani Foil Printed...</p>
                              </div>
                              <div className="row">
                                <p className="order-product-price">Price: ₹ 499.00</p>
                              </div>
                              <div className="row">
                                <p className="delivery-date">Delivered on 30 Aug, 2021</p>
                              </div>
                              <div className="row">
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
                                <p className="order-product-name">Maroon Kurti Set With Bandhani Foil Printed Chevron Design And Off White Skirt</p>
                                <p className="order-product-name-mobile">Maroon Kurti Set With Bandhani Foil Printed...</p>
                              </div>
                              <div className="row">
                                <p className="order-product-price">Price: ₹ 499.00</p>
                              </div>
                              <div className="row">
                                <p className="delivery-date">Delivered on 30 Aug, 2021</p>
                              </div>
                              <div className="row">
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
                                <p className="order-product-name">Green Jhumkas With Carved Floral Pattern And Dangling Colorful Bead Fringes Kohar</p>
                                <p className="order-product-name-mobile">Green Jhumkas With Carved Floral Pattern And...</p>
                              </div>
                              <div className="row">
                                <p className="order-product-price">Price: ₹ 499.00</p>
                              </div>
                              <div className="row">
                                <p className="delivery-date">Delivered on 30 Aug, 2021</p>
                              </div>
                              <div className="row">
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
                                <p className="order-product-name">Gold Plated Earrings In Crescent Shape With Kundan And Dangling Pearls</p>
                                <p className="order-product-name-mobile">Gold Plated Earrings In Crescent Shape With...</p>
                              </div>
                              <div className="row">
                                <p className="order-product-price">Price: ₹ 499.00</p>
                              </div>
                              <div className="row">
                                <p className="delivery-date">Delivered on 30 Aug, 2021</p>
                              </div>
                              <div className="row">
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
                                <p className="order-product-name">Pink And Coral Shaded Anarkali Dress With Bandhani And Foil Print In Chevron Pattern</p>
                                <p className="order-product-name-mobile">Pink And Coral Shaded Anarkali Dress With...</p>
                              </div>
                              <div className="row">
                                <p className="order-product-price">Price: ₹ 499.00</p>
                              </div>
                              <div className="row">
                                <p className="delivery-date">Delivered on 30 Aug, 2021</p>
                              </div>
                              <div className="row">
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

export default OrderHistory
