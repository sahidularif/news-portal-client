import { createContext, useState } from "react";
import {
  BrowserRouter as Router, Route, Switch
} from "react-router-dom";
import './App.css';
import DashboardLayout from "./components/Dashboard/DashboardLayout/DashboardLayout";
import AddAdmin from "./components/Dashboard/Pages/AddAdmin";
import PostArticle from "./components/Dashboard/Pages/PostArticle";
import PrivateRoute from "./components/Dashboard/PrivateRoute/PrivateRoute";
import Home from "./components/home/Home";
import NewsDetails from "./components/home/NewsDetails";
import Login, { sessionInfo } from "./components/login/Login";
export const LoginContext = createContext();
export const SessionContext = createContext();
function App() {
  const [loggedInUser, SetLoggedInUser] = useState({});
  const [sessionUser, setSessionUser] = useState({});
  const sessionEmail = sessionInfo();
  console.log(sessionEmail);
  // useEffect(()=>{
  //   setSessionUser.email(sessionEmail);
  // })

  return (
    <LoginContext.Provider value={[loggedInUser, SetLoggedInUser]}>
      <SessionContext.Provider value={[sessionUser, setSessionUser]}>
        <div className="App">
          <Router>
            <Switch>

              <Route exact path="/login">
                <Login />
              </Route>

              <PrivateRoute exact path="/dashboard" >
                <DashboardLayout />
              </PrivateRoute>

              <PrivateRoute exact path="/dashboard/post-article">
                <DashboardLayout title='Post Article'>
                  <PostArticle />
                </DashboardLayout>
              </PrivateRoute>
              <PrivateRoute exact path="/article/:articleId">
                <NewsDetails />
              </PrivateRoute>

              <PrivateRoute exact path="/dashboard/add-admin">
                <DashboardLayout title='Add Admin'>
                  <AddAdmin />
                </DashboardLayout>
              </PrivateRoute>

              <Route exact path="/">
                <Home />
              </Route>

            </Switch>
          </Router>
        </div>
      </SessionContext.Provider>
    </LoginContext.Provider>
  );
}

export default App;
