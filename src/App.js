import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './Component/Header/Header';
import Footer from './Component/Footer/Footer';
import Home from './Component/Home/Home';
import Shop from './Component/Shop/Shop';
import Contact from './Component/Contact/Contact';
import Order from './Component/Order/Order';




function App() {
  return (
    <div className="App">

      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home.html">
            <Home></Home>
          </Route>
          <Route path="/shop.html">
            <Shop></Shop>
          </Route>
          <Route path="/order.html">
          <Order></Order>
          </Route>
          <Route path="/contact.html">
            <Contact></Contact>
          </Route>
        </Switch>

        <Footer></Footer>

      </Router>

    </div>

  );
}

export default App;
