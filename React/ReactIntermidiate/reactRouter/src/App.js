import { Routes , Route, NavLink } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Labs from "./components/Labs";
import NotFound from "./components/NotFound";
import Support from "./components/Support";
import About from "./components/About";
import { Link } from "react-router-dom";
import MainHeader from "./components/MainHeader";

function App() {
  return (
    <div className="App flex flex-col justify-center items-center">
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/support">Support</NavLink>
          </li>
          <li>
            <NavLink to="/labs">Labs</NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<MainHeader />}>
          <Route index element={<Home/>}></Route>
          <Route path="/support" element={<Support />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/labs" element={<Labs />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
