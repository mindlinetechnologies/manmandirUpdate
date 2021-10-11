import React,{useEffect} from 'react';
import Footer from '../assets/Footer';
import Navbar from '../assets/Navbar';
import './../css/cartpage.css'
import {useHistory} from 'react-router-dom';

const Cart = () => {
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

        
        
        {/* Header-Slider */}
            <div className="agileheader-banner">
                <img src="images/images/banner/b7.jpg" alt="Groovy Apparel" />
            </div>
        {/* //Header-Slider */}
            </div>


            <div className="banner-bootom-w3-agileits" style={{margin: '50px'}}>
        <div className="container-fluid">
          <div className="container">                
            <div className="col-xl-12 col-md-12 col-sm-12">
              <div className="page-title-wrapper">
                <h1 className="page-title">
                  <span className="base" data-ui-id="page-title-wrapper">Shopping Cart - Manmandir House</span>
                </h1>
              </div>
              <div className="cart_page_title">
                <h1>Your Shopping Bag</h1>
                {/* <p>Review of <span><b>1</b></span> item <span><b>6966.00</b></span></p> */}
              </div>
              <div className="cart_facility">
                <ul>
                  <li>
                    <span className="icon_secure" />
                    <h3>100% Purchase Protection</h3>
                    <p>We are committed to ensure 100% Purchase protection for customers by offering genuine products.</p>
                  </li>
                  <li>
                    <span className="icon_returnn" />
                    <h3 />
                    <p />
                  </li>
                  <li>
                    <span className="icon_happy" />
                    <h3>Happiness Guarantee</h3>
                    <p>Secure payments and easy returns for items shopped.</p>
                  </li>
                  {/* <li>
							<span class="icon_return"></span>
							<h3>30 Days Easy Return</h3>
							<p>If you have a problem, we solve it. Refund it. Just reach out to our Customer Support Team.</p>
						</li> */}
                </ul>
              </div>
              <div className="text-right">
                <a href="Product-page.html" className="cont-shopping"><i className="fa fa-caret-left" aria-hidden="true" /> Continue shopping</a>
              </div>                    
              <div id="price" data-name="Active Items Header" className="a-section a-spacing-none sc-list-head sc-java-remote-feature">
                {/* <div class="a-row">
						<div class="a-column a-span10"></div>
						<div class="a-column a-span2 a-text-right a-spacing-top-micro a-span-last">
							<span class="a-color-secondary">Remove</span>
						</div>
					</div> */}
                <div className="a-row-2">
                  <div className="a-column a-span10" />
                  <div className="a-column a-span2 a-text-right a-spacing-top-micro a-span-last">
                    <span className="a-color-secondary">Price</span>
                  </div>
                </div>
                <div className="a-row-3">
                  <div className="a-column a-span10" />
                  <div className="a-column a-span2 a-text-right a-spacing-top-micro a-span-last">
                    <span className="a-color-secondary">Product Description</span>
                  </div>
                </div>
              </div>                    
            </div>					
            <div className="col-xl-12 col-md-12 col-sm-12">
              <div className="col-xl-8 col-md-8 col-sm-12">
                <div className="cart-main-section">
                  <div className="cart">
                    <div className="col-xl-12 col-md-12 col-sm-12 mt">
                      <div className="row">
                        <div className="col-xl-3 col-md-3 col-sm-12">
                          <img src="images/images/gowns/2-1BackCloseUp(4).JPG" className="product-img" />
                        </div>
                        <div className="col-xl-6 col-md-6 col-sm-12">
                          <div className="row">
                            <span className="product-name" aria-hidden="true">Anni Designer Women's Rama Color Banarasi Silk Saree With
                              Blouse Piece (ALIFA ELEPHANT_RAMA_Free Size)</span>
                            <span className="product-name-mobile" aria-hidden="true">Anni Designer Women's Rama Color Banarasi Silk
                              Saree...</span>
                          </div>
                          <div className="row new-row">
                            <p>Select Size: <span className="text-style">US 4</span></p>
                          </div>
                          <div className="row new-row">
                            <p>Select Your Height (Height including Heels): <span className="text-style">5 feet 5 inch
                                (165 cm)</span></p>
                          </div>
                          <div className="row new-row">
                            <p>Estimated Delivery Date: <span className="text-style">30 Sep, 2021</span></p>
                          </div>
                          <div className="row new-row">
                            <p>Price: <span className="text-style">₹ 499.00</span></p>
                          </div>
                          <div className="row new-row">
                            <p>Quantity: <input type="number" className="quant" defaultValue={2} /> <button className="btn-update">Update</button></p>
                          </div>
                          <div className="row new-row total-price-mobile">
                            <p>Total Price: <span className="text-style">₹ 998.00</span></p>
                          </div>
                        </div>
                        <div className="col-xl-2 col-md-2 col-sm-12 text-center total-price">
                          <p>₹ 998.00</p>
                        </div>
                        <div className="col-xl-1 col-md-1 col-sm-12 remove-item-cart">
                          <a href="#"><i className="fa fa-trash" /></a>
                        </div>                                        
                      </div>
                    </div>
                  </div>
                  <div className="cart">
                    <div className="col-xl-12 col-md-12 col-sm-12 mt">
                      <div className="row">
                        <div className="col-xl-3 col-md-3 col-sm-12">
                          <img src="images/images/gowns/4-1Front.JPG" className="product-img" />
                        </div>
                        <div className="col-xl-6 col-md-6 col-sm-12">
                          <div className="row">
                            <span className="product-name" aria-hidden="true">Powder Peach Saree In Silk With Woven Floral Jaal And Magenta Patola Pallu Online - Kalki Fashion</span>
                            <span className="product-name-mobile" aria-hidden="true">Powder Peach Saree In Silk With Woven Floral Jaal...</span>
                          </div>
                          <div className="row new-row">
                            <p>Select Size: <span className="text-style">US 4</span></p>
                          </div>
                          <div className="row new-row">
                            <p>Select Your Height (Height including Heels): <span className="text-style">5 feet 5 inch
                                (165 cm)</span></p>
                          </div>
                          <div className="row new-row">
                            <p>Estimated Delivery Date: <span className="text-style">30 Sep, 2021</span></p>
                          </div>
                          <div className="row new-row">
                            <p>Price: <span className="text-style">₹ 499.00</span></p>
                          </div>
                          <div className="row new-row">
                            <p>Quantity: <input type="number" className="quant" defaultValue={2} /> <button className="btn-update">Update</button></p>
                          </div>
                          <div className="row new-row total-price-mobile">
                            <p>Total Price: <span className="text-style">₹ 998.00</span></p>
                          </div>
                        </div>
                        <div className="col-xl-2 col-md-2 col-sm-12 text-center total-price">
                          <p>₹ 998.00</p>
                        </div>
                        <div className="col-xl-1 col-md-1 col-sm-12 remove-item-cart">
                          <a href="#"><i className="fa fa-trash" /></a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="cart">
                    <div className="col-xl-12 col-md-12 col-sm-12 mt">
                      <div className="row">
                        <div className="col-xl-3 col-md-3 col-sm-12">
                          <img src="images/images/gowns/5-1FrontCloseUp.JPG" className="product-img" />
                        </div>
                        <div className="col-xl-6 col-md-6 col-sm-12">
                          <div className="row">
                            <span className="product-name" aria-hidden="true">Anni Designer Women's Rama Color Banarasi Silk Saree With
                              Blouse Piece (ALIFA ELEPHANT_RAMA_Free Size)</span>
                            <span className="product-name-mobile" aria-hidden="true">Anni Designer Women's Rama Color Banarasi Silk
                              Saree...</span>
                          </div>
                          <div className="row new-row">
                            <p>Select Size: <span className="text-style">US 4</span></p>
                          </div>
                          <div className="row new-row">
                            <p>Select Your Height (Height including Heels): <span className="text-style">5 feet 5 inch
                                (165 cm)</span></p>
                          </div>
                          <div className="row new-row">
                            <p>Estimated Delivery Date: <span className="text-style">30 Sep, 2021</span></p>
                          </div>
                          <div className="row new-row">
                            <p>Price: <span className="text-style">₹ 499.00</span></p>
                          </div>
                          <div className="row new-row">
                            <p>Quantity: <input type="number" className="quant" defaultValue={2} /> <button className="btn-update">Update</button></p>
                          </div>
                          <div className="row new-row total-price-mobile">
                            <p>Total Price: <span className="text-style">₹ 998.00</span></p>
                          </div>
                        </div>
                        <div className="col-xl-2 col-md-2 col-sm-12 text-center total-price">
                          <p>₹ 998.00</p>
                        </div>
                        <div className="col-xl-1 col-md-1 col-sm-12 remove-item-cart">
                          <a href="#"><i className="fa fa-trash" /></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-4 col-sm-12">
                <h3 className="summary">Order Summary</h3>
                <hr />
                <div className="d-flex">
                  <h4>Sub Total</h4>
                  <div className="ml-auto font-weight-bold"> ₹ 000.00 </div>
                </div>
                <div className="d-flex">
                  <h4>Discount</h4>
                  <div className="ml-auto font-weight-bold"> ₹ 000.00 </div>
                </div>
                <hr />
                <div className="d-flex">
                  <h4>Coupon Discount</h4>
                  <div className="ml-auto font-weight-bold"> ₹ 000.00 </div>
                </div>
                <div className="d-flex">
                  <h4>GST</h4>
                  <div className="ml-auto font-weight-bold"> ₹ 000.00 </div>
                </div>
                <div className="d-flex">
                  <h4>Shipping Cost</h4>
                  <div className="ml-auto font-weight-bold"> ₹ 000.00 </div>
                </div>
                <div className="mt-mb" />
                <div className="d-flex gray-effect">
                  <h4 style={{color: '#d33b33', fontWeight: 700}}>Grand Total</h4>
                  <div className="ml-auto font-weight-bold"> ₹ 000.00 </div>
                </div>
                <br />
                <div className="text-right">
                  <button className="checkout">Proceed to buy</button>
                </div>
                <br />
                <hr />
                <div className="text-center payment">
                  <h4 className="payment-mode">WE ACCEPT</h4>
                  <img src="images/images/payment-logosnew.jpg" />
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

export default Cart
