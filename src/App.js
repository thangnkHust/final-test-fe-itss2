import Test1 from './pages/test1';
import Test2 from './pages/test2';
import FinalTest from './pages/final-test';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
        <Switch>
          <Route path="/test1">
            <Test1 />
          </Route>
          <Route path="/test2">
            <Test2 />
          </Route>
          <Route path="/final">
            <FinalTest />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
