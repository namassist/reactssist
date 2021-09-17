// Library
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { MahasiswaProvider } from "../Tugas-13/MahasiswaContext";

// Components
import Navbar from "./Navbar";
import Tugas9 from "../Tugas-9/Tugas9";
import Tugas10 from "../Tugas-10/Tugas10";
import Tugas11 from "../Tugas-11/Tugas11";
import Tugas12 from "../Tugas-12/Tugas12";
import Tugas13 from "../Tugas-13/Tugas13";
import MahasiswaList from "./MahasiswaList";
import MahasiswaForm from "./MahasiswaForm";
import Tugas15List from "../Tugas-15/Tugas15List";
import Tugas15Form from "../Tugas-15/Tugas15Form";

const Routes = () => {
  return (
    <Router>
      <MahasiswaProvider>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Tugas9} />
          <Route exact path="/tugas10" component={Tugas10} />
          <Route exact path="/tugas11" component={Tugas11} />
          <Route exact path="/tugas12" component={Tugas12} />
          <Route exact path="/tugas13" component={Tugas13} />
          <Route exact path="/tugas14" component={MahasiswaList} />
          <Route exact path="/tugas14/create" component={MahasiswaForm} />
          <Route exact path="/tugas14/edit/:id" component={MahasiswaForm} />
          <Route exact path="/tugas15" component={Tugas15List} />
          <Route exact path="/tugas15/create" component={Tugas15Form} />
          <Route exact path="/tugas15/edit/:id" component={Tugas15Form} />
        </Switch>
      </MahasiswaProvider>
    </Router>
  );
};

export default Routes;
