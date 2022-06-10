import { useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import LoginPage from "../LoginPage/LoginPage";
import MoviesIndexPage from "../MoviesIndexPage/MoviesIndexPage";
import MovieDetailPage from "../MovieDetailPage/MovieDetailPage";
import movies from '../../moviesData.js'
import ActorIndexPage from "../ActorIndexPage/ActorIndexPage"
import NavBar from "../../components/NavBar/NavBar"

function App() {
  const [user, setUser] = useState(null);

  return (
    <main className="App">
      {user ? (
        <>
        <NavBar user={user}/>
          <Switch>
            <Route path="/movies/:movieName">
              <MovieDetailPage movies={movies}/>
            </Route>
            <Route path="/movies">
              <MoviesIndexPage user={user} movies={movies}/>
            </Route>
            <Route exact path="/actors">
              <ActorIndexPage movies={movies}/>
            </Route>
            <Redirect to="/movies" />
          </Switch>
        </>
      ) : (
        <LoginPage setUser = {setUser} />
      )}
    </main>
  );
}

export default App;
