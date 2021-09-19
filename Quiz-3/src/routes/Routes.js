import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { MobileDataAppsProvider } from "../context/MobileDataAppsContext";

import Layout from "../components/Layout";
import Home from "../pages/Home";
import About from "../pages/About";
import Navbar from "../components/Navbar";
import MobileList from "../pages/MobileList";
import MobileForm from "../components/MobileForm";
import QuerySearch from "../pages/QuerySearch";

const Routes = () => {
  return (
    <Router>
      <MobileDataAppsProvider>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Layout content={<Home />} />
          </Route>
          <Route exact path="/about">
            <Layout content={<About />} />
          </Route>
          <Route exact path="/mobile-list">
            <Layout content={<MobileList />} />
          </Route>
          <Route exact path="/mobile-form">
            <Layout content={<MobileForm />} />
          </Route>
          <Route exact path="/mobile-form/edit/:id">
            <Layout content={<MobileForm />} />
          </Route>
          <Route exact path="/search/:valueOfSearch">
            <Layout content={<QuerySearch />} />
          </Route>
        </Switch>
      </MobileDataAppsProvider>
    </Router>
  );
};

export default Routes;
