import React,{useEffect} from 'react'
import Navbar from '../assets/Navbar';
import Footer from '../assets/Footer';
import './../css/orderTracking.css'
import {useHistory} from 'react-router-dom';

const OrderTracking = () => {
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

            </div> 
            <div className="banner-bootom-w3-agileits">
        <div className="container-fluid">
          <div className="container">
            <div className="row">
              <div className="page-title-wrapper">
                <h1 className="page-title">
                  <span className="base" data-ui-id="page-title-wrapper">Order Tracking</span>
                </h1>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-12 col-md-12 col-sm-12">
                <div className="box">
                  <div className="row">
                    <span className="title">
                      <i className="fa fa-map-marker" />
                      <strong>Track status of your shipment</strong>
                    </span>
                  </div>
                  <div className="row">
                    <div className="form-group row">
                      <label className="control-label col-md-1">Order ID:</label>
                      <div className="col-md-3">
                        <input className="form-control" placeholder="Enter Order ID" required />
                      </div>
                      <div className="col-md-3">
                        <button type="submit" className="btn-submit">Submit</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="delivered" className="row">
              <div className="col-xl-6 col-md-6 col-sm-12">
                <div className="box">
                  <div className="row">
                    <div className="hp_cards information_block">
                      <div className="hp_cards_info">
                        <h5><i className="order_detail_icon" />Order Details</h5>
                      </div>
                    </div>
                  </div>
                  <div className="row mb-20">
                    <div className="col-xl-12 col-md-12 col-sm-12">
                      <p className="text-bold">Order ID : <span>52113</span></p>
                    </div>
                  </div>
                  <div className="row mb-20">
                    <div className="col-xl-12 col-md-12 col-sm-12">
                      <p className="text-bold">Order Placed On : <span>15 May, 2021</span></p>
                    </div>
                  </div>
                  <div className="row mb-20">
                    <div className="col-xl-12 col-md-12 col-sm-12">
                      <p className="text-bold">Status : <span className="color-green">Delivered</span></p>
                    </div>
                  </div>
                  <div className="row mb-20">
                    <div className="col-xl-12 col-md-12 col-sm-12">
                      <p className="text-bold">Delivered On : <span>30 Sep, 2021</span></p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-md-6 col-sm-12">
                <div className="box">
                  <div className="row">
                    <div className="delievery_info ">
                      <div className="delievery_list_wrap clearfix">
                        <ul>
                          <li className="active">
                            <span><b>Activity : </b>
                              <activity>Delivered</activity>
                            </span>
                            <span><b>Location : </b>
                              <activity>KOLHAPUR - 416010</activity>
                            </span>
                            <div className="date_info_wrap">
                              <span className="date">28 May</span>
                              <span className="time">01:16 PM</span>
                            </div>
                            <i className="circle_icon" />
                          </li>
                          <li>
                            <span><b>Activity : </b>
                              <activity>At local</activity>
                            </span>
                            <span><b>Location : </b>
                              <activity>KOLHAPUR - 416122</activity>
                            </span>
                            <div className="date_info_wrap">
                              <span className="date">27 May</span>
                              <span className="time">05:27 PM</span>
                            </div>
                            <i className="circle_icon" />
                          </li>
                          <li>
                            <span><b>Activity : </b>
                              <activity>Shipment exception</activity>
                            </span>
                            <span><b>Location : </b>
                              <activity>Kolhapur - 416010</activity>
                            </span>
                            <div className="date_info_wrap">
                              <span className="date">18 May</span>
                              <span className="time">04:46 PM</span>
                            </div>
                            <i className="circle_icon" />
                          </li>
                          <li>
                            <span><b>Activity : </b>
                              <activity>In transit</activity>
                            </span>
                            <span><b>Location : </b>
                              <activity>Kolhapur - 416010</activity>
                            </span>
                            <div className="date_info_wrap">
                              <span className="date">18 May</span>
                              <span className="time">11:32 AM</span>
                            </div>
                            <i className="circle_icon" />
                          </li>
                          <li>
                            <span><b>Activity : </b>
                              <activity>In transit</activity>
                            </span>
                            <span><b>Location : </b>
                              <activity>Kolhapur - 416012</activity>
                            </span>
                            <div className="date_info_wrap">
                              <span className="date">18 May</span>
                              <span className="time">05:24 AM</span>
                            </div>
                            <i className="circle_icon" />
                          </li>
                          <li>
                            <span><b>Activity : </b>
                              <activity>Picked up</activity>
                            </span>
                            <span><b>Location : </b>
                              <activity>Kolhapur - 416012</activity>
                            </span>
                            <div className="date_info_wrap">
                              <span className="date">17 May</span>
                              <span className="time">03:59 PM</span>
                            </div>
                            <i className="circle_icon" />
                          </li>
                          <li>
                            <span><b>Activity : </b>
                              <activity>Shipment information sent to customer</activity>
                            </span>
                            <span><b>Location : </b>
                              <activity>NA</activity>
                            </span>
                            <div className="date_info_wrap">
                              <span className="date">16 May</span>
                              <span className="time">08:37 AM</span>
                            </div>
                            <i className="circle_icon" />
                          </li>
                          <li>
                            <span><b>Activity : </b>
                              <activity>Order Received</activity>
                            </span>
                            <span><b>Location : </b>
                              <activity>Kolhapur</activity>
                            </span>
                            <div className="date_info_wrap">
                              <span className="date">15 May</span>
                              <span className="time">01:10 PM</span>
                            </div>
                            <i className="circle_icon" />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="not-delivered" className="row">
              <div className="col-xl-6 col-md-6 col-sm-12">
                <div className="box">
                  <div className="row">
                    <div className="hp_cards information_block">
                      <div className="hp_cards_info">
                        <h5><i className="order_detail_icon" />Order Details</h5>
                      </div>
                    </div>
                  </div>
                  <div className="row mb-20">
                    <div className="col-xl-12 col-md-12 col-sm-12">
                      <p className="text-bold">Order ID : <span>52113</span></p>
                    </div>
                  </div>
                  <div className="row mb-20">
                    <div className="col-xl-12 col-md-12 col-sm-12">
                      <p className="text-bold">Order Placed On : <span>15 May, 2021</span></p>
                    </div>
                  </div>
                  <div className="row mb-20">
                    <div className="col-xl-12 col-md-12 col-sm-12">
                      <p className="text-bold">Status : <span className="color-red">Not Delivered</span></p>
                    </div>
                  </div>
                  <div className="row mb-20">
                    <div className="col-xl-12 col-md-12 col-sm-12">
                      <p className="text-bold">Estimate Date : <span>30 Sep, 2021</span></p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-md-6 col-sm-12">
                <div className="box">
                  <div className="row">
                    <div className="delievery_info ">
                      <div className="delievery_list_wrap clearfix">
                        <ul>
                          <li>
                            <span><b>Activity : </b>
                              <activity>Order Received</activity>
                            </span>
                            <span><b>Location : </b>
                              <activity>Kolhapur</activity>
                            </span>
                            <div className="date_info_wrap">
                              <span className="date">15 May</span>
                              <span className="time">01:10 PM</span>
                            </div>
                            <i className="circle_icon" />
                          </li>
                          <li>
                            <span><b>Activity : </b>
                              <activity>Shipment information sent to customer</activity>
                            </span>
                            <span><b>Location : </b>
                              <activity>NA</activity>
                            </span>
                            <div className="date_info_wrap">
                              <span className="date">16 May</span>
                              <span className="time">08:37 AM</span>
                            </div>
                            <i className="circle_icon" />
                          </li>
                          <li>
                            <span><b>Activity : </b>
                              <activity>Picked up</activity>
                            </span>
                            <span><b>Location : </b>
                              <activity>Kolhapur - 416012</activity>
                            </span>
                            <div className="date_info_wrap">
                              <span className="date">17 May</span>
                              <span className="time">03:59 PM</span>
                            </div>
                            <i className="circle_icon" />
                          </li>
                          <li className="active">
                            <span><b>Activity : </b>
                              <activity>In transit</activity>
                            </span>
                            <span><b>Location : </b>
                              <activity>Kolhapur - 416012</activity>
                            </span>
                            <div className="date_info_wrap">
                              <span className="date">18 May</span>
                              <span className="time">05:24 AM</span>
                            </div>
                            <i className="circle_icon" />
                          </li>
                        </ul>
                      </div>
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

export default OrderTracking
