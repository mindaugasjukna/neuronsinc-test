import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <Navbar />
        </nav>
        <main>
          <Switch>
            <Route path="/login" render={() => <Login />} />
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
