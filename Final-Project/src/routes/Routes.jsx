// Library
import React from "react";
import { Redirect } from "react-router";
import { MovieAppProvider } from "../contexts/MovieContext";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Components
import Layout from "../components/Layout";
import Home from "../pages/Home";
import Movies from "../pages/Movies";
import DetailMovie from "../pages/DetailMovie";
import Games from "../pages/Games";
import DetailGame from "../pages/DetailGame";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ChangePassword from "../pages/ChangePassword";
import MovieList from "../pages/MovieList";
import MovieForm from "../pages/MovieForm";
import GameList from "../pages/GameList";
import GameForm from "../pages/GameForm";
import Cookies from "js-cookie";

export const Routes = () => {
  const RouteLogin = ({ ...props }) => {
    if (Cookies.get("token") === undefined) {
      return <Route {...props} />;
    } else if (Cookies.get("token") !== undefined) {
      return <Redirect to="/" />;
    }
  };

  const RouteAdmin = ({ ...props }) => {
    if (Cookies.get("token") === undefined) {
      return <Redirect to="/" />;
    } else {
      return <Route {...props} />;
    }
  };

  return (
    <Router>
      <MovieAppProvider>
        <Switch>
          <Route exact path="/">
            <Layout content={<Home />} />
          </Route>
          <Route exact path="/movies">
            <Layout content={<Movies />} />
          </Route>
          <Route exact path="/movieDetail/:id">
            <Layout content={<DetailMovie />} />
          </Route>
          <RouteAdmin exact path="/movielist">
            <Layout content={<MovieList />} />
          </RouteAdmin>
          <RouteAdmin exact path="/movie/create">
            <Layout content={<MovieForm />} />
          </RouteAdmin>
          <RouteAdmin exact path="/movie/edit/:id">
            <Layout content={<MovieForm />} />
          </RouteAdmin>
          <Route exact path="/games">
            <Layout content={<Games />} />
          </Route>
          <Route exact path="/gameDetail/:id">
            <Layout content={<DetailGame />} />
          </Route>
          <RouteAdmin exact path="/gamelist">
            <Layout content={<GameList />} />
          </RouteAdmin>
          <RouteAdmin exact path="/game/create">
            <Layout content={<GameForm />} />
          </RouteAdmin>
          <RouteAdmin exact path="/game/edit/:id">
            <Layout content={<GameForm />} />
          </RouteAdmin>
          <RouteLogin exact path="/login">
            <Layout content={<Login />} />
          </RouteLogin>
          <RouteLogin exact path="/register">
            <Layout content={<Register />} />
          </RouteLogin>
          <Route exact path="/changepassword">
            <Layout content={<ChangePassword />} />
          </Route>
        </Switch>
      </MovieAppProvider>
    </Router>
  );
};
