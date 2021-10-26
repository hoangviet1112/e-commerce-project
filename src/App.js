import { Switch, Route } from 'react-router';
import './App.css';
import Header from './components/header/header';
import { Homepage } from './pages/homepage/Homepage';
import { Shoppage } from './pages/shoppage/Shoppage';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up-page/SignInAndSignUpPage';
import {useState, useEffect} from "react"
import { auth, createUserProfileDocument } from './firebase-config';

function App() {
  
  const [user, setUser] = useState(null)

  useEffect(() => {
    const unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapshot => {
          setUser({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          })
        })
      }
      setUser(userAuth)  
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
