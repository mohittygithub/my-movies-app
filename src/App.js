import "./App.css";
import { Switch, Route } from "react-router-dom";

import { BrowserRouter } from "react-router-dom";
import { GlobalProvider } from "./context/GlobalState";
import WatchList from "./pages/watch-list/watch-list.component";
import AddMovie from "./pages/add-movie/add-movie.component";
import Header from "./components/header/header.component";
import Watched from "./pages/watched-list/watched-list.component";
import LoginPage from "./pages/login-signup/login-signup.component";

function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/login" component={LoginPage} />
          <Route exact path="/" component={WatchList} />
          <Route path="/add" component={AddMovie} />
          <Route path="/watchlist" component={WatchList} />
          <Route path="/watched" component={Watched} />
        </Switch>
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;
