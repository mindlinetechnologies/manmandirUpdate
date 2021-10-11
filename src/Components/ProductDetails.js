import React, { useRef, useEffect } from 'react'
import Navbar from '../assets/Navbar'
import './../css/productDetails.css'
import './../css/ImageZoom.css'
import {useHistory} from 'react-router-dom'
import Footer from '../assets/Footer'
import ReactImageMagnify from 'react-image-magnify'
import $ from 'jquery'


const ProductDetails = () => {
  let history = useHistory()
  let url = "images/images/gowns/1front.JPG"
 
  const productImageChange = (event) => {
      let smallImg = event.target
      let fullImg = document.getElementById("featured");
      $(".zoomImage").prop("href", smallImg.src);
   
   
      fullImg.src = smallImg.src


  }
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0)
    })

    document.getElementById('img-container').addEventListener('mouseover', function(){
      imageZoom('featured')
      
  })
  
  function imageZoom(imgID){
    let img = document.getElementById(imgID)
    let lens = document.getElementById('lens')
  
    lens.style.backgroundImage = `url( ${img.src} )`
  
    let ratio = 3
  
    lens.style.backgroundSize = (img.width * ratio) + 'px ' + (img.height * ratio) + 'px';
  
    img.addEventListener("mousemove", moveLens)
    lens.addEventListener("mousemove", moveLens)
    img.addEventListener("touchmove", moveLens)
  
    function moveLens(){
      /*
          Function sets sets position of lens over image and background image of lens
          1 - Get cursor position
          2 - Set top and left position using cursor position - lens width & height / 2
          3 - Set lens top/left positions based on cursor results
          4 - Set lens background position & invert
          5 - Set lens bounds
      
          */
  
          //1
      let pos = getCursor()
      //console.log('pos:', pos)
  
      //2
      let positionLeft = pos.x - (lens.offsetWidth / 2)
      let positionTop = pos.y - (lens.offsetHeight / 2)
  
      //5
      if(positionLeft < 0 ){
        positionLeft = 0
      }
  
      if(positionTop < 0 ){
        positionTop = 0
      }
  
      if(positionLeft > img.width - lens.offsetWidth /3 ){
        positionLeft = img.width - lens.offsetWidth /3
      }
  
      if(positionTop > img.height - lens.offsetHeight /3 ){
        positionTop = img.height - lens.offsetHeight /3
      }
  
  
      //3
      lens.style.left = positionLeft + 'px';
      lens.style.top = positionTop + 'px';
  
      //4
      lens.style.backgroundPosition = "-" + (pos.x * ratio) + 'px -' +  (pos.y * ratio) + 'px'
    }
  
    function getCursor(){
      /* Function gets position of mouse in dom and bounds
           of image to know where mouse is over image when moved
          
          1 - set "e" to window events
          2 - Get bounds of image
          3 - set x to position of mouse on image using pageX/pageY - bounds.left/bounds.top
          4- Return x and y coordinates for mouse position on image
          
           */
  
          let e = window.event
          let bounds = img.getBoundingClientRect()
  
          //console.log('e:', e)
          //console.log('bounds:', bounds)
          let x = e.pageX - bounds.left
      let y = e.pageY - bounds.top
      x = x - window.pageXOffset;
      y = y - window.pageYOffset;
      
      return {'x':x, 'y':y}
    }
  
  }
  
  imageZoom('featured')


  





    return () => {
      unlisten()
    }
  }, [])

  return (
    <>


          {/* <div id="img-container">
            <div id="lens" />
            <img id="featured" src="images/shoe1.jpg" />
        </div> */}




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

            <section className="pro-detail">
        <div className="">
          <div className="row">
            <div className="col-md-12">
              <div className="col-md-1">
                <img src="images/images/gowns/1front.JPG" alt="" onClick={productImageChange} />
                <img src="images/images/gowns/1Lside.JPG" alt="" onClick={productImageChange} />
                <img src="images/images/gowns/1Rside.JPG" alt="" onClick={productImageChange} />
                <img src="images/images/gowns/1back.JPG" alt="" onClick={productImageChange} />
              </div>
              {/*  */}
              <div className="col-md-4">
                <div className="img-magnifier-container">
                <div id="img-container">
                        <div id="lens" />
                        <img className="cloudzoom" id="featured" src="images/images/gowns/1front.JPG"  />
                  </div>
                  <div id="myresult" className="img-zoom-result" />
                </div>
              </div>
              {/*  */}
              <div className="col-md-7">
                <div className="content">
                  <h3>Organic Steel Grey Gown with Net Work</h3>
                  <p>Product Id:- 79654#1</p>
                  <p><span className="item_price">Rs.10495/-</span><br /> <del>-</del></p>
                  <div className="rating1">
                    <span className="starRating">
                      <input id="rating5" type="radio" name="rating" defaultValue={5} />
                      <label htmlFor="rating5">5</label>
                      <input id="rating4" type="radio" name="rating" defaultValue={4} />
                      <label htmlFor="rating4">4</label>
                      <input id="rating3" type="radio" name="rating" defaultValue={3} defaultChecked />
                      <label htmlFor="rating3">3</label>
                      <input id="rating2" type="radio" name="rating" defaultValue={2} />
                      <label htmlFor="rating2">2</label>
                      <input id="rating1" type="radio" name="rating" defaultValue={1} />
                      <label htmlFor="rating1">1</label>
                    </span>
                  </div>
                  <div className="color-quality">
                    <div className="color-quality-right">
                      <form action>
                        <label htmlFor="cars">Select Size</label>
                        <select name="Size">
                          <option value="XS">XS</option>
                          <option value="S">S</option>
                          <option value="M">M</option>
                          <option value="L">L</option>
                          <option value="XL">XL</option>
                          <option value="XXL">XXL</option>
                          <option value="XXXL">XXXL</option>
                        </select>
                      </form>
                    </div>
                    <div className="color-quality-Left">
                      <a href="sizechart.html"><img src="images/images/icons/size-guide.jpg" alt="" style={{cursor: 'pointer', width: '40px', height: 'auto', marginLeft: '66px'}} /></a>
                      <p style={{marginLeft: '53px', fontWeight: 600, color: 'black'}}>Size Chart</p>
                    </div>
                  </div>
                  <div className="color-quality">
                    <div className="color-quality-right">
                      <h5>Select your Height(Including Heels)</h5>
                      <form action>
                        <select name="Size">
                          <option value="null">Select Height</option>
                          <option value="null">5.5"</option>
                          <option value="null">6"</option>
                        </select>
                      </form>
                    </div>
                  </div>
                  <div className="color-quality">
                    <div className="color-quality-right">
                      <h5>Neckline Length</h5>
                      <select id="country1" onchange="change_country(this.value)" className="frm-field required sect">
                        <option value="null">Select Neckline Length</option>
                        <option value="null">5.5"</option>
                        <option value="null">6"</option>
                      </select>
                    </div>
                  </div>
                  <div className="color-quality">
                    <div className="color-quality-right">
                      <h5>Sleeve Length</h5>
                      <select id="country1" onchange="change_country(this.value)" className="frm-field required sect">
                        <option value="null">Select Sleeves Length</option>
                        <option value="null">Elbow Sleeves</option>
                        <option value="null">Three Fourth Sleeves</option>
                        <option value="null">Full Sleeves </option>
                      </select>
                    </div>
                  </div>
                  <div className="color-quality">
                    <div className="color-quality-right">
                      <h5>Back Open</h5>
                      <select id="country1" onchange="change_country(this.value)" className="frm-field required sect">
                        <option value="null" />
                        <option value="null">Yes</option>
                        <option value="null">No</option>
                      </select>
                    </div>
                  </div>
                  <div className="occasion-cart">
                    <div className="add-cart">
                      <input type="submit" name="submit" defaultValue="Add to Cart" />
                    </div>
                    <div className="buyproduct">
                      <input type="submit" name="submit" defaultValue="Buy Now" />
                    </div>
                    <div className="addwishlist">
                      <i className="fa fa-heart" aria-hidden="true" />
                    </div>
                  </div>
                  <div className="service-list">
                    <ul>
                      <li>
                        <a href="faq.html"><span className="icon"><img src="https://kalkifashion.com.imgeng.in/media/wysiwyg/why-kalkinew-product-1.png" alt="Assured Quality" />
                          </span> <span>Assured Quality</span> </a>
                      </li>
                      <li>
                        <a href="sizing-fittings.html"><span className="icon"> <img src="https://kalkifashion.com.imgeng.in/media/wysiwyg/why-kalkinew-product-3.png" alt="Custom fitting" /></span> <span className="whykalki-link">Custom
                            fitting </span> </a>
                      </li>
                      <li>
                        <a href="about.html"><span className="icon" target="_blank"> <img src="https://kalkifashion.com.imgeng.in/media/wysiwyg/why-kalkinew-product-6.png" alt="Exclusive collection" /></span><span className="whykalki-link">
                            Exclusive collection</span> </a>
                      </li>
                    </ul>
                    <p>Want to try before ordering? <a target="_blank" href="contact.html">Come visit
                        our store! Locate Address</a></p>
                  </div>
                  {/* FAQS START */}
                  <div className="accordion">
                    <div className="accordion-item">
                      <h4 className="accordion-header">
                        More Details about products<i className="fa fa-plus" aria-hidden="true" />
                      </h4>
                      <div className="accordion-collapse">
                        <div className="accordion-body">
                          <ul>
                            <li>
                              <p>Crafted with illusion neckline and Attached Cape</p>
                            </li>
                            <li>
                              <p>It has a side zip closure.</p>
                            </li>
                            <li>
                              <p>This piece comes with padding.</p>
                            </li>
                            <li>
                              <p>Present neckline length is 6.5” and is boat neck.</p>
                            </li>
                            <li>
                              <p>WASH CARE INSTRUCTION: Dry clean only.</p>
                            </li>
                            <li>
                              <p>Slight variation in color is possible due to digital
                                photography.</p>
                            </li>
                            <li>
                              <p>Being rewarded as the most trusted brand our customers too
                                believe we deliver same styles as promised on the website.
                              </p>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h4 className="accordion-header">
                        Key Specifications <i className="fa fa-plus" aria-hidden="true" />
                      </h4>
                      <div className="accordion-collapse">
                        <div className="accordion-body">
                          <ul>
                            <li>
                              <p>Additional details for the dress</p>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* pincode check start */}
                  <div className="description">
                    <h5>Check delivery, payment options and charges at your location</h5>
                    <form action="#" method="post">
                      <input type="text" defaultValue="Enter pincode" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Enter pincode';}" required />
                      <input type="submit" defaultValue="Check" />
                    </form>
                  </div>
                  {/* pincode check end */}
                </div>
              </div>
              {/* Second half page of product detail page */}
              <div className="clearfix"> </div>			
            </div>
          </div>
        </div>
      </section>




        
      

      {/* <div className='container' style={{marginTop:20,marginBottom:20}}>
        <div className='row'>
          <div className='col-md-4'>
          <div id="myCarousel" className="carousel slide" data-ride="carousel">
                 
                  <ol className="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to={0} className="active" />
                    <li data-target="#myCarousel" data-slide-to={1} />
                    <li data-target="#myCarousel" data-slide-to={2} />
                    <li data-target="#myCarousel" data-slide-to={3} />
                  </ol>
                 
                  <div className="carousel-inner">
                          <div className="item active">
                            <div id="product-image">

                          <a href="images/images/gowns/2-1BackCloseUp(6).JPG">
                            <img className="cloudzoom" src="images/images/gowns/2-1BackCloseUp(6).JPG" alt="" data-cloudzoom="
                          zoomPosition:'inside',
                          zoomOffsetX:0,
                          zoomFlyOut:false,
                          variableMagnification:false,
                          disableZoom:'auto',
                          touchStartDelay:100,
                          propagateGalleryEvent:true
                        " />
                          </a>
                        </div>
                  </div>
                <div className="item">
                    <div id="product-image">
                    <a href="images/images/gowns/2-1BackCloseUp(4).JPG">
                      <img className="cloudzoom" src="images/images/gowns/2-1BackCloseUp(4).JPG" alt="" data-cloudzoom="
                    zoomPosition:'inside',
                    zoomOffsetX:0,
                    zoomFlyOut:false,
                    variableMagnification:false,
                    disableZoom:'auto',
                    touchStartDelay:100,
                    propagateGalleryEvent:true
                  " />
                    </a>
                  </div>
              </div>
                <div className="item">
                  <div id="product-image">
                    <a href="images/images/gowns/2-1BackCloseUp(3).JPG">
                      <img className="cloudzoom" src="images/images/gowns/2-1BackCloseUp(3).JPG" alt="" data-cloudzoom="
                    zoomPosition:'inside',
                    zoomOffsetX:0,
                    zoomFlyOut:false,
                    variableMagnification:false,
                    disableZoom:'auto',
                    touchStartDelay:100,
                    propagateGalleryEvent:true
                  " />
                    </a>
                  </div>
                </div>


                <div className="item">
                  <div id="product-image">
                    <a href="images/images/gowns/2-1BackCloseUp(2).JPG">
                      <img className="cloudzoom" src="images/images/gowns/2-1BackCloseUp(2).JPG" alt="" data-cloudzoom="
                    zoomPosition:'inside',
                    zoomOffsetX:0,
                    zoomFlyOut:false,
                    variableMagnification:false,
                    disableZoom:'auto',
                    touchStartDelay:100,
                    propagateGalleryEvent:true
                  " />
                    </a>
                  </div>
                </div>
        </div>
                
                <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                  <span className="glyphicon glyphicon-chevron-left" />
                  <span className="sr-only">Previous</span>
                </a>
                <a className="right carousel-control" href="#myCarousel" data-slide="next">
                  <span className="glyphicon glyphicon-chevron-right" />
                  <span className="sr-only">Next</span>
                </a>
      </div>

      <div className="row" style={{marginTop:10}}>
        <div className="col-md-12">
                  <div className="col-md-3">
                     <img src="images/images/gowns/2-1BackCloseUp(6).JPG" onClick={sliderImageChange} />
                  </div>
                  <div className="col-md-3">
                  <img src="images/images/gowns/2-1BackCloseUp(4).JPG" onClick={sliderImageChange} />
                  </div>
                  <div className="col-md-3">
                  <img src="images/images/gowns/2-1BackCloseUp(3).JPG" />
                  </div>
                  <div className="col-md-3">
                  <img src="images/images/gowns/2-1BackCloseUp(2).JPG" />
                  </div>
        </div>

      </div>



        </div>
          </div>
        </div> */}


    </>
  )
}

export default ProductDetails
