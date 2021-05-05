import './App.css';
import Navig from './Components/Nav'
import ProductList from './Components/ProductList';
import {Switch, Route} from 'react-router-dom';
import Details from './Components/Details';
import Cart from './Components/Cart';

function App() {
  return (
    <div className="App">
      <Route path="/" component={Navig}/>
      <Switch>
        <Route exact path="/" component={ProductList}/>
        <Route exact path="/details" component={Details}/>
        <Route exact path="/cart" component={Cart}/>
      </Switch>
    </div>
  );
}

export default App;
