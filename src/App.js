import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Components/Home/Home';
import Faq from './Components/Faq/Faq';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import Articles from './Components/Articles/Articles';
import AuthProvider from './Context/AuthProvider';
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            {/* route of - Home page */}
            <Route path="/home" exact>
              <Home></Home>
            </Route>
            {/* Route of - FAQ page*/}
            <Route path='/faq'>
              <Faq></Faq>
            </Route>
            {/* route of - Registration */}
            <Route path='/register'>
              <Register></Register>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path='/articles'>
              <Articles></Articles>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
