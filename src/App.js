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
import Appointment from './Components/Appointment/Appointment';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            {/* route of - Home page */}
            <Route path="/" exact>
              <Home></Home>
            </Route>
            <Route path="/home" exact>
              <Home></Home>
            </Route>
            <PrivateRoute path="/home/:id">
              <Appointment></Appointment>
            </PrivateRoute>
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
            <PrivateRoute path='/articles'>
              <Articles></Articles>
            </PrivateRoute>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
