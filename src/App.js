import "./App.scss";
import { RestaurantContext } from "./context/context";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.scss";
import Dashboard from "./pages/Dashboard";
import RestaurantProfile from "./pages/RestaurantProfile";

function App() {
  return (
    <Router>
      <Switch>
        <div className="app">
          <Route path="/restaurant/profile/:id">
            <RestaurantProfile />
          </Route>
          <Route path="/" exact>
            <Dashboard />
          </Route>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
