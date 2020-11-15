import "./App.scss";
import { RestaurantContext } from "./context/context";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.scss";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Router>
      <Switch>
        <div className="app">
          <Route path="/">
            <Dashboard />
          </Route>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
