import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Components/Home/Home';
function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          {/* route of - Home page */}
          <Route path="/home" exact>
            <Home></Home>
          </Route>
          {/* Route of - FAQ page*/}
          <Route path='/faq'>

          </Route>
        </Switch>
      </Router>


    </div>
  );
}

export default App;
