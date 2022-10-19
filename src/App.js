import React ,{useEffect} from "react";
import "./App.css";
import HomeScreen from "./Screens/HomeScreen";
import LoginPage from "./Screens/LoginPage"
import ProfileScreen from './Screens/ProfileScreen'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import {auth} from "./firebase"
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";




function App() {
 const user = useSelector(selectUser);
const dispatch = useDispatch();


 useEffect(() => {
  const unsubscribe = auth.onAuthStateChanged((userAuth) =>{
    if(userAuth){
      dispatch(
        login({
          uid: userAuth.uid,
          email: userAuth.email,
        })
      );
    } else {
      // logged out
      dispatch(logout());
    }
  });  
  return unsubscribe;
 }, [dispatch]);
 
  return (
    <div className="App">
      <Router>
      {!user ? (<LoginPage/>) : ( <Switch>
          <Route path='/profile'>
            <ProfileScreen/>
          </Route>
          <Route path="/">
            <HomeScreen />
          </Route>
        </Switch>)}
       
      </Router>
    </div>
  );
}

export default App;
