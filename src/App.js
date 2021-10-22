import { Switch, Route } from 'react-router';
import './App.css';
import { Homepage } from './pages/homepage/Homepage';
import { Shoppage } from './pages/shoppage/Shoppage';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path component={Homepage} />
        <Route path="/shop" component={Shoppage} />
      </Switch> 
    </div>
  );
}

export default App;
