import React from 'react';
import Navbar from './Components/Navbar'
import LandingPage from './Components/LandingPage';
import './App.css'
import { BrowserRouter as Router ,Route , Switch,Redirect} from 'react-router-dom';
import Footer from './Components/Footer';
import ProductDetails from './Components/ProductDetails';

function App() {
  return (
    <Router>
    <React.Fragment>
      <Navbar/>
      <div className="container">
        <Switch>
        <Route exact path={'/'} render={() => {
                        return <Redirect to={'/products'}/>
                    }}/>
            <Route exact  path="/products" component={LandingPage}/>
          <Route exact path='/products/:id' component={ProductDetails}/>
        </Switch>
      </div>
      <Footer/>
    </React.Fragment>
    </Router>
  );
}

export default App;
