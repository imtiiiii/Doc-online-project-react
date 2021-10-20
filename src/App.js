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
import NotFound from './Components/NotFound/NotFound';
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
            {/* service route - dynamic */}
            <PrivateRoute path="/home/:id" exact>
              <Appointment></Appointment>
              {/* home */}
            </PrivateRoute>
            <Route path="/home">
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
            {/* login page */}
            <Route path="/login">
              <Login></Login>
            </Route>
            {/* private article page */}
            <PrivateRoute path='/articles'>
              <Articles></Articles>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          {/* footer here */}
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
