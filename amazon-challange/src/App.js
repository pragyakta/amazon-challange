import React,{useEffect} from 'react';
import './App.css';
import Header from './Header';
import Home from "./Home";
import {BrowserRouter as Router,Routes,Route,} from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import {useStateValue} from "./StateProvider";
import { auth } from "./firebase";

function App(){
  const [{user},dispatch] = useStateValue();

  //useeffect <<<<<<<<<<<< POWERFUL
  //Piece of code which runs on a given condition

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) =>{
    if(authUser){
      dispatch({
        type:"SET_USER",
        user: authUser,
      });
    }else{
      dispatch({
        type:"SET_USER",
        user:null,
      });
    }
    });
    return ()=>{
      //Any Clean up 
      unsubscribe();
    };
    }, []);

    console.log("user is>>>",user);
  return(
    <Router> {/**Router wraps everything and Route decides whats gonna be loading when something is called*/}
    <div className="app">
      {/* loading different pages without refreshing or reloading /Switching between pages */}
      <Routes>
        <Route path="/checkout">
          <Header/>
          <Checkout/>
        </Route>
        <Route path="/login"> 
          <Login/>
        </Route>
        <Route path="/">
          <Header/> 
          {/**Created a component and rendering out */}
          <Home />
        </Route>
      </Routes>
    </div>
  </Router>

  );
}
export default App;