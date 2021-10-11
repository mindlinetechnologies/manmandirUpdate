import React,{useEffect} from 'react';
import Footer from '../assets/Footer';
import Navbar from '../assets/Navbar';
import {useHistory} from 'react-router-dom';


const About = () => {
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
                    <div class="agileheader-banner">
			            <img src="images/images/banner/2.jpg" alt="Groovy Apparel" />
		            </div>
        
            </div>

            <div>
        <div className="wthreeabout">
          <div className="about-us-grids">
            <div className="col-md-6 about-us-grid about-us-images">
              <div className="col-md-6 about-us-image about-us-image1">
                <img src="images/images/2ndbanner/about/about1.jpg" alt="" />
              </div>
              <div className="col-md-6 about-us-image about-us-image2">
                <img src="images/images/2ndbanner/about/about2.jpg" alt="" />
              </div>
              <div className="col-md-6 about-us-image about-us-image3">
                <img src="images/images/2ndbanner/about/about3.jpg" alt="" />
              </div>
              <div className="col-md-6 about-us-image about-us-image4">
                <img src="images/images/2ndbanner/about/about4.jpg" alt="" />
              </div>
              <div className="clearfix" />
            </div>
            <div className="col-md-6 about-us-grid about-us-text">
              <h1>ABOUT US</h1>
              <p>Established in the year 1996, Manmandir House in Rajarampuri, Kolhapur is a top part of the classification Readymade Garment Retailers in the Kolhapur. This notable foundation goes about as a one-stop objective overhauling clients both nearby and from different pieces of Kolhapur. Throughout its excursion, this business has set up firm traction in its industry. The conviction that consumer loyalty is as significant as their items and administrations have helped this foundation collect a tremendous base of clients, which keeps on developing constantly. This business utilizes people that are devoted to their Ajobs and put in a ton of exertion to accomplish the normal vision and bigger objectives of the organization. Sooner rather than later, this business intends to grow its line of items and administrations and oblige a bigger customer base. In Kolhapur, this foundation possesses a noticeable area in Rajarampuri. It is an easy undertaking in driving to this foundation as there are different methods of transport promptly accessible. It is known to offer top support in the accompanying classes: Boutiques, Ladies Readymade Garment Retailers, Ladies Readymade Garment Wholesalers, Ladies Boutique, Bridal Wear Designers, Bridal Lehenga Retailers, Women Kurti Retailers, Lucknowi Dress Material Retailers.</p>
            </div>
            <div className="clearfix" />
          </div>
        </div>
        {/* //About-Us */}
        {/* Be-Yourself */}
        <div className="aitsyourself">
          <div className="aitsyourself-grids">
            <div className="col-md-5 aitsyourself-grid aitsyourself-grid1">	
            </div>
            <div className="col-md-3 aitsyourself-grid aitsyourself-grid2">
              <h3>“The appearance of things changes according to the emotions; and thus we see magic and beauty in them, while the magic and beauty are really in ourselves.”</h3>				
            </div>
            <div className="col-md-4 aitsyourself-grid aitsyourself-grid3">
            </div>
            <div className="clearfix" />
          </div>
        </div>
        {/* //Be-Yourself */}
        {/* Commercial */}
        <div className="aitscommercial">	
          <div className="col-md-6 aitscommercial-grid aitscommercial-grid1">
            <h2>DERNIÈRE MODE</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras commodo varius vehicula. Mauris porta metus vitae nulla dignissim egestas. Aliquam sed molestie eros, in pharetra purus. Praesent consequat porta viverra. Praesent gravida dapibus condimentum. Vestibulum vel lacus aliquet, laoreet mi eu, tempor est. Quisque volutpat finibus tristique. Duis at nibh eget nulla pretium pretium. Quisque arcu sem, dignissim eu egestas quis, vulputate non mauris.</p>
            <p className="w3teaseraits">Check out our latest commercial, teaser and behind the scenes film.</p>
            <a className="popup-with-zoom-anim" href="#small-dialog4">WATCH NOW</a>
          </div>
          <div className="col-md-6 aitscommercial-grid aitscommercial-grid2">
            <img src="images/images/2ndbanner/about/about7.jpg" alt="" />
          </div>
          <div className="clearfix" />
          <div id="small-dialog4" className="mfp-hide agileinfo">
            <div className="pop_up">
              <iframe src="https://player.vimeo.com/video/184401441" />
            </div>
          </div>
        </div>
        {/* //Commercial */}
        {/*-728x90-*/}
        {/* Accessories */}
        <div className="w3laccessoriesaits">
          <div className="col-md-6 w3laccessoriesaits-grids w3laccessoriesaits-grids1">
            <div className="w3laccessoriesaits-grid w3laccessoriesaits-grid1">
              <div className="grid">
                <figure className="effect-apollo">
                  <img src="images/images/2ndbanner/about/about20.jpg" alt="Groovy Apparel" />
                  <figcaption />
                </figure>
              </div>
              <h4>EAU FRAICHE</h4>
              <p>Lorem Ipsum Dolor Site Amet</p>
              <h6><a href="mens_accessories.html">Shop Now</a></h6>
            </div>
          </div>
          <div className="col-md-6 w3laccessoriesaits-grids w3laccessoriesaits-grids2">
            <div className="w3laccessoriesaits-grid w3laccessoriesaits-grid2">
              <div className="grid">
                <figure className="effect-apollo">
                  <img src="images/images/2ndbanner/about/about16.jpg" alt="" />
                  <figcaption />
                </figure>
              </div>
              <h4>PIGMENT POWDER</h4>
              <p>Lorem Ipsum Dolor Site Amet</p>
              <h6><a href="womens_accessories.html">Shop Now</a></h6>
            </div>
          </div>
          <div className="clearfix" />
        </div>
        {/* //Accessories */}
        {/*-728x90-*/}
        {/* Shoes */}
        <div className="w3lsshoesaits">
          <div className="w3lsshoesaits-info">
            <h3>SHOES TO DIE FOR</h3>
            <p>Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.</p>
            <div className="wthreeshop-a">
              <a href="womens_accessories.html">SHOP WOMEN'S SHOES</a>
            </div>
          </div>
        </div>
        {/* //Shoes */}
        {/* New-Fashions */}
        <div className="agilenwew3lsfashions">
          <div className="container">
            <h3>AVANT-GARDE FASHION</h3>
            <h4>Star Studded Launching of the Festival Collection in NYFW in</h4>
            <div className="agilenwew3lsfashions-aitstimer">
              <div className="clock">
                <div className="column days">
                  <div className="timer" id="days" />
                  <div className="text">DAYS</div>
                </div>
                <div className="timer days">:</div>
                <div className="column">
                  <div className="timer" id="hours" />
                  <div className="text">HOURS</div>
                </div>
                <div className="timer">:</div>
                <div className="column">
                  <div className="timer" id="minutes" />
                  <div className="text">MINUTES</div>
                </div>
                <div className="timer">:</div>
                <div className="column">
                  <div className="timer" id="seconds" />
                  <div className="text">SECONDS</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* //New-Fashions */}
      </div>
      <Footer />

        </>
    )
}

export default About
