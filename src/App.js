import WatchList from "./components/WatchList";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/watchlist" component={WatchList} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </>
  );
}

export default App;
