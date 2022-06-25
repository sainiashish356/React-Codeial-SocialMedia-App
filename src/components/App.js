import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { useAuth } from '../hooks';
import { Home, Login ,Signup } from '../pages';
// import Signup from '../pages/Signup';
import { Loader, Navbar} from './';
 

const Page404 = () => {
  return <h1>404..Page Not Found</h1>;
};

 function App() {
 
  const auth = useAuth();


  if (auth.loading) {
    return <Loader />;
  }

  return (
    <div className="App">
      <Router>
      <Navbar />
        <Switch>

          <Route exact path="/">
            {/* <Home posts={posts} /> */}
            <Home posts={[]} />
          </Route>

          <Route exact path="/login">
            <Login />
          </Route>

          <Route exact path="/register">
            <Signup />
          </Route>

          <Route>
            <Page404 />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
