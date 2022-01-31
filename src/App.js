import logo from "./logo.png";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import DashboardComponent from "./components/DashboardComponent";
import AtomsComponent from "./components/AtomsComponent";
import "bootstrap/dist/css/bootstrap.css";
import "./scss/main.scss";

function App() {
  return (
    <Router>
      <div>
        <div className="navBar">
          <div className="navBar__image">
            <img src={logo} />
          </div>
          <ul>
            <li>
              <Link to="/" style={{ textDecoration: 'none' }}>Home</Link>
            </li>
            <li>
              <Link to="/logs" style={{ textDecoration: 'none' }}>Logs</Link>
            </li>
          </ul>
        </div>
        <Routes>
          <Route exact path="/logs" element={<AtomsComponent />}></Route>
          <Route exact path="/" element={<DashboardComponent />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
