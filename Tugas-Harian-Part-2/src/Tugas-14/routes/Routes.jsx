// Library
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { MahasiswaProvider } from "../../Tugas-13/MahasiswaContext";

// Components
import Navbar from "../components/Navbar";
import Tugas9 from "../../Tugas-9/Tugas9";
import Tugas10 from "../../Tugas-10/Tugas10";
import Tugas11 from "../../Tugas-11/Tugas11";
import Tugas12 from "../../Tugas-12/Tugas12";
import Tugas13 from "../../Tugas-13/Tugas13";
import Tugas14 from "../../Tugas-14/Tugas14";
import MahasiswaForm from "../../Tugas-14/components/MahasiswaForm";

const Routes = () => {
  return (
    <MahasiswaProvider>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Tugas9} />
          <Route exact path="/tugas10" component={Tugas10} />
          <Route exact path="/tugas11" component={Tugas11} />
          <Route exact path="/tugas12" component={Tugas12} />
          <Route exact path="/tugas13" component={Tugas13} />
          <Route exact path="/tugas14" component={Tugas14} />
          <Route exact path="/tugas14/create" component={MahasiswaForm} />
          <Route exact path="/tugas14/create/:id" component={MahasiswaForm} />
        </Switch>
      </Router>
    </MahasiswaProvider>
  );
};

export default Routes;
