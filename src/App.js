import { Switch, Route } from 'react-router';
import './App.css';
import Header from './components/header/header';
import { Homepage } from './pages/homepage/Homepage';
import { Shoppage } from './pages/shoppage/Shoppage';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up-page/SignInAndSignUpPage';
import {useState, useEffect} from "react"
import { auth } from './firebase-config';

function App() {
  
  const [user, setUser] = useState(null)

  useEffect(() => {
    const unSubscribeFromAuth = auth.onAuthStateChanged(currentUser => {
      setUser(currentUser);
      return () => {
        unSubscribeFromAuth()
      }
    })
  }, [])

  console.log(user);  
  
  return (
    <div>
      <Header currentUser={user} />
      <Switch>
        <Route exact path component={Homepage} />
        <Route path="/shop" component={Shoppage} />
        <Route path="/signIn" component={SignInAndSignUpPage} />
      </Switch> 
    </div>
  );
}

export default App;
