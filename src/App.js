import { Switch, Route } from 'react-router';
import './App.css';
import Header from './components/header/header';
import { Homepage } from './pages/homepage/Homepage';
import { Shoppage } from './pages/shoppage/Shoppage';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up-page/SignInAndSignUpPage';
import {auth} from "./firebase/firebase.utils"
import { useState, useEffect } from 'react';

function App() {
  
  const [currentUser, setCurrentUser] = useState()
  
  useEffect(() => {
    auth.onAuthStateChanged(user => {
      setCurrentUser({ currentUser: user})
      console.log(user);
    })
  })
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path component={Homepage} />
        <Route path="/shop" component={Shoppage} />
        <Route path="/signIn" component={SignInAndSignUpPage} />
      </Switch> 
    </div>
  );
}

export default App;
