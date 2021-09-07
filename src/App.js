import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import './App.css';
import Dashboard from "./components/Dashboard/Dashboard";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login" component={Login}></Route>
          <Route path="/dashboard" component={Dashboard}></Route>
          <Route path="/" component={Home}></Route>
        </Switch>
      </Router>
    </div> 
  );
}

export default App;
