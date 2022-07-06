import { BrowserRouter as Router, Route, Routes ,Navigate} from 'react-router-dom';

import { useAuth } from '../hooks';
import { Home, Login ,Signup ,Settings} from '../pages';
// import Signup from '../pages/Signup';
import { Loader, Navbar} from './';

function PrivateRoute({ children }) {
  const auth = useAuth();
  return auth.user ? children : <Navigate to='/login' />;
}
 

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
        <Routes>

          <Route exact path="/" element={<Home posts={[]}/>}>
            {/* <Home posts={posts} /> */}
            {/* <Home posts={[]} /> */}
          </Route>

          <Route exact path="/login" element={<Login/>}>
          </Route>

          <Route exact path="/register" element={<Signup/>}>
          </Route>
         
          <Route exact path="/settings" element={
          <PrivateRoute> 
                <Settings/>
          </PrivateRoute>
          }>
          </Route> 

          <Route element={<Page404 />}>
            
          </Route>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
