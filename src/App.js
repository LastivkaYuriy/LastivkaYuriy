import { Outlet } from "react-router-dom";
import {Navbar} from './Components/Navbar/Navbar.jsx'
import {Footer} from './Components/Footer/Footer.jsx'
import i18next from "i18next";
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
