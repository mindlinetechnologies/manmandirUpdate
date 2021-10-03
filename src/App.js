import logo from './logo.svg'
import './App.css'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Components/Home'
import ProductPage from './Components/ProductPage'
import Cart from './Components/Cart'
import Checkout from './Components/Checkout'

function App () {
  return(
      <>
          <Router>
            <Switch>
              <Route path="/" component={Home} exact></Route>
              <Route path="/products" component={ProductPage} ></Route>
              <Route path="/cart" component={Cart} ></Route>
              <Route path="/checkout" component={Checkout} ></Route>
            </Switch>
          </Router>
      </>
  )
}

export default App
