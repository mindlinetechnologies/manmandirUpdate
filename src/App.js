import logo from './logo.svg'
import './App.css'
import 'jquery/dist/jquery.min.js';


import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Components/Home'
import ProductPage from './Components/ProductPage'
import Cart from './Components/Cart'
import Checkout from './Components/Checkout';
import ProductDetails from './Components/ProductDetails'
import OrderHistory from './Components/OrderHistory'
import OrderTracking from './Components/OrderTracking'
import RangeSliderComponent from './Components/RangeSlider'
import Login from './Components/Login'
import Register from './Components/Register'
import ContactUs from './Components/ContactUs'
import Wishlist from './Components/Wishlist'
import About from './Components/About'
import Faq from './Components/Faq';
import MyAccount from './Components/MyAccount';
import NewArrivals from './Components/NewArrivals';
import BestSeller from './Components/BestSeller';


function App () {
  return(
      <>
          <Router>
            <Switch>
              <Route path="/" component={Home} exact></Route>
              <Route path="/about" component={About} ></Route>
              <Route path="/products" component={ProductPage} ></Route>
              <Route path="/cart" component={Cart} ></Route>
              <Route path="/checkout" component={Checkout} ></Route>
              <Route path="/productDetails" component={ProductDetails} ></Route>
              <Route path="/orderHistory" component={OrderHistory} ></Route>
              <Route path="/orderTracking" component={OrderTracking} ></Route>
              <Route path="/rangeSlider" component={RangeSliderComponent} ></Route>
              <Route path="/login" component={Login} ></Route>
              <Route path="/register" component={Register} ></Route>
              <Route path="/contact" component={ContactUs} ></Route>
              <Route path="/wishlist" component={Wishlist} ></Route>
              <Route path="/faq" component={Faq} ></Route>
              <Route path="/myAccount" component={MyAccount} ></Route>
              <Route path="/newArrivals" component={NewArrivals} ></Route>
              <Route path="/bestSeller" component={BestSeller} ></Route>
            </Switch>
          </Router>
      </>
  )
}

export default App
