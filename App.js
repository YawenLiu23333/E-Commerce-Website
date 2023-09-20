import React, { useEffect } from "react";
import Header from "./Header";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import Payment from "./Payment";
import Orders from "./Orders";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe('pk_test_51Lxic8FUpKAZLHdPXZbvLzIp7onLuxCB7iV5ghFjVvkigDW01mNOvTOsmVcPdKdLSHPTGncsbOx7D86eanzMUHNU002sRPwzh0');


function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {

    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>>', authUser);

      if (authUser) { //IF the user logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });

      } else { //IF the user logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, [])


  return (
    
    <Router>
      <div className="app">  
          <Routes>

            <Route path = "/" element={[<Header />, <Home />]} />
            <Route path="/checkout" element={[<Header />, <Checkout />]} />
            <Route path = "/login" element={<Login />} />
            <Route path="/payment" element={[<Header />, <Elements stripe={promise}><Payment /></Elements> ]}/>
            <Route path = "/orders" element={[<Header />, <Orders />]} />

          </Routes>
      </div>  
    </Router>  
  );
}
export default App;
