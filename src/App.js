// import 'rsuite/dist/rsuite.min.css';
import {Switch,Route} from "react-router-dom"
import PrivateRoute from './components/PrivateRoute';
import SignIn from "./pages/SignIn"
import Home from './pages/Home';
import PublicRouter from './components/PublicRouter';
import { ProfileProvider } from "./context/ProfileContext";

function App() {
  return (
    <>
      <ProfileProvider>
        
      <Switch>
        <PublicRouter  path="/signin" >
        {/* if profile exist then dont show sign in page redirect to home page  */}
          <SignIn/>
        </PublicRouter>
        <PrivateRoute path="/" >
        {/* if profile doesnt exist then dont show the home page redirect to signin page */}
          <Home/>
        </PrivateRoute>
      </Switch>
      </ProfileProvider>
  
    </>
  );
}

export default App;
