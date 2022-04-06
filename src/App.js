import "./App.css";
import Home from "./pages/home/Home";
import MapDeviceDashboard from "./pages/mapDevice/mapDeviceDashboard";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Redirect,
} from "react-router-dom";
import UserList from "./pages/userList/UserList";
import RectifierTransformerList from "./pages/rectifierTransformerList/RectifierTransformerList";
import LandingPage from "./pages/SaaSProductLandingPage";

function App() {
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route
            path="/home"
            render={() => {
              return <Home />;
            }}
          ></Route>
          <Route
            path="/mapDevice"
            render={() => {
              return <MapDeviceDashboard />;
            }}
          ></Route>
          <Route
            path="/rectifierTransformerList"
            render={() => {
              return <RectifierTransformerList />;
            }}
          ></Route>
          <Route
            path="/users"
            render={() => {
              return <UserList />;
            }}
          ></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
