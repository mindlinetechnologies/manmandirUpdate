import logo from './logo.svg'
import './App.css'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Components/Home'
import ProductPage from './Components/ProductPage'

function App () {
  return(
      <>
          <Router>
            <Switch>
              <Route path="/" component={Home} exact></Route>
              <Route path="/products" component={ProductPage} ></Route>
            </Switch>
          </Router>
      </>
  )
}

export default App
