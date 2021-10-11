import React,{useEffect} from 'react';
import Navbar from '../assets/Navbar';
import Footer from '../assets/Footer';
import './../css/contact.css'
import $ from 'jquery';
import {useHistory} from 'react-router-dom';

const ContactUs = () => {
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

        <div className="w3aitscontactagile">
            <h1>CONTACT</h1>
        <div className="contact-info">
          <div className="container">
            <div className="contact-info-grids">
              <div className="col-md-6 col-sm-6 contact-info-grid contact-info-grid-1">
                <img src="images/shop.jpg" alt="Groovy Apparel" />
              </div>
              <div className="col-md-6 col-sm-6 contact-info-grid contact-info-grid-2">
                <h2>Where We Are</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod	tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
              </div>
              <div className="clearfix" />
            </div>
          </div>
        </div>
      </div>
      <div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.6460507312904!2d74.24081601476838!3d16.694586326809418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc1003e75916257%3A0x6c72c7cd075234fe!2sMan%20Mandir%20house%E2%80%A6Boutique%20%26%20Ethnic%20wear!5e0!3m2!1sen!2sin!4v1633501758849!5m2!1sen!2sin" style={{width:'100%',height:500}} allowfullscreen="" loading="lazy"></iframe>
      </div>

      <div className="wthreeaddressaits">
        <div className="container">
          <div className="col-md-4 wthreeaddressaits-grid wthreeaddressaits-grid1">
            <div className="aitsaddressw3l">
              <h4>Address</h4>
              <address>
                <ul>
                  <li>Shop No.3, Krishna Tower,</li>
                  <li>7th Lane, Rajarampuri,</li>
                  <li>Kolhapur, Maharashtra 416003</li>
                  
                </ul>
              </address>
            </div>
            <div className="aitsphonew3l">
              <h4>Phone</h4>
              <ul>
                <li><span className="glyphicon glyphicon-earphone" aria-hidden="true" /> +1 (734) 123-4567</li>
                <li><span className="glyphicon glyphicon-earphone" aria-hidden="true" /> +1 (739) 648-7114</li>
              </ul>
            </div>
            <div className="aitsemailw3l">
              <h4>Email</h4>
              <ul>
                <li><a href="mailto:mail@example.com"><span className="glyphicon glyphicon-envelope" aria-hidden="true" /> info1@example.com</a></li>
                <li><a href="mailto:mail@example.com"><span className="glyphicon glyphicon-envelope" aria-hidden="true" /> info2@example.com</a></li>
              </ul>
            </div>
            <div className="clearfix" />
          </div>
          <div className="col-md-8 wthreeaddressaits-grid wthreeaddressaits-grid2">
            <form action="#" method="post">
              <input type="text" className="text name" name="Name" placeholder="Name" required />
              <input type="text" className="text" name="Email" placeholder="Email" required />
              <input type="text" className="text" name="Phone" placeholder="Phone" required />
              <input type="text" className="text" name="City" placeholder="City" required />
              <textarea name="Message" className="text" placeholder="Message" required defaultValue={""} />
              <input type="submit" defaultValue="SEND MESSAGE"/>
            </form>
          </div>
          <div className="clearfix" />
        </div>
      </div>

      

      <Footer />

        </>
    )
}

export default ContactUs
