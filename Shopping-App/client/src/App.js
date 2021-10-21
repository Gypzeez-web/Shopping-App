import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from 'react';
import Register from "./login/Register";
import Login from "./login/login";
import HomePage from "./HomePage";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  const [ user, setLoginUser] = useState({})
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/">
            {
              user && user._id ? <HomePage setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser}/>
            }
          </Route>
          <Route path="/login">
            <Login setLoginUser={setLoginUser}/>
          </Route>
          <Route path="/register">
            <Register />
          </Route>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}
export default App;
