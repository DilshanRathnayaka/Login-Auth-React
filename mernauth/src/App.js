import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom'
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';
import Home from './components/Home';
import Login from './components/Login';
import Logout from './components/Logout';
import Message from './components/Message';
import Navbar from './components/Navbar';
import Register from './components/Register';
import Protected from './Protected';




function App() {
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const [isnotLoggedIn, setisnotLoggedIn] = useState(true);
  
  const LoginRoute = async () => {
    try {
      const res = await fetch('/auth', {
        method : "GET",
        headers : {
          Accept : "application/json",
          "Content-Type" : "application/json"
        },
        credentials : "include"
      });

      if(res.status === 200){
        setisLoggedIn(false)
        setisnotLoggedIn(true)
      }if(res.status ===401){
        setisLoggedIn(true)
        setisnotLoggedIn(false)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    LoginRoute();
  }, []);

  return (
    <><Navbar isLoggedIn={isLoggedIn} /><Routes>
      <Route path='/' element={<Home />}></Route>

      <Route
        path="/Login"
        element={
          <Protected isnotLoggedIn={isnotLoggedIn}>
            <Login />
          </Protected>
        }
      />

<Route
        path="/Register"
        element={
          <Protected isnotLoggedIn={isnotLoggedIn} >
            <Register />
          </Protected>
        }
      />

      <Route
        path="/Logout"
        element={
          <Protected isLoggedIn={isLoggedIn} >
            <Logout />
          </Protected>
        }
      />

      <Route
        path="/Dashboard"
        element={
          <Protected isLoggedIn={isLoggedIn}>
            <Dashboard />
          </Protected>
        }
      />
<Route path='/Message' element={<Message/>}/>


    </Routes><Footer/></>

  );
}

export default App;
