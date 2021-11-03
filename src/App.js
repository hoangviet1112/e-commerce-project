import { Switch, Route, Redirect } from 'react-router';
import './App.css';
import Header from './components/header/header';
import { Homepage } from './pages/homepage/Homepage';
import { Shoppage } from './pages/shoppage/Shoppage';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up-page/SignInAndSignUpPage';
import {useState, useEffect} from "react"
import { auth, createUserProfileDocument } from './firebase-config';
import { useDispatch, useSelector } from 'react-redux';
import {setCurrentUser} from "../src/redux/user/user.action"

function App() {  
  const [user, setUser] = useState(null)
  const dispatch = useDispatch()
  const currentUser = useSelector(state => state.user.currentUser)
  
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

  dispatch(setCurrentUser(user))
  
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path component={Homepage} />
        <Route path="/shop" component={Shoppage} />
        <Route exact path="/signIn" render={() => currentUser ? (<Redirect to="/" />) : (<SignInAndSignUpPage />)} />
      </Switch> 
    </div>
  );
}



export default App;
