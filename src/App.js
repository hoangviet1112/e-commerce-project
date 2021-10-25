import { Switch, Route } from 'react-router';
import './App.css';
import Header from './components/header/header';
import { Homepage } from './pages/homepage/Homepage';
import { Shoppage } from './pages/shoppage/Shoppage';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up-page/SignInAndSignUpPage';

function App() {
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
