import logo from './logo.png';
import NavBarComponent from './components/NavBar';
import DashboardComponent from './components/DashboardComponent';
import AtomsComponent from './components/AtomsComponent';
import 'bootstrap/dist/css/bootstrap.css';
import './scss/main.scss'

function App() {
  return (
    <div>
    <NavBarComponent/>
    <AtomsComponent/>
    </div>
  );
}

export default App;
