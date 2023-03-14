import {
  createHashHistory,
  ReactLocation,
  Router,
  createBrowserHistory,
  Outlet,
} from "@tanstack/react-location";
import { Fooldal } from "./Fooldal";
import { Lablec } from "./Lablec";
import { Navigacio } from "./Navigacio";
import { routes } from "./routes";
import "./App.css";

const history = createBrowserHistory();
const location = new ReactLocation({ history });
function App() {
  return (
    <>
      <Router location={location} routes={routes}>
        <Navigacio />
        <Outlet />
        <Lablec />
      </Router>
    </>
  );
}

export default App;
