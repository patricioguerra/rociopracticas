import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// styles
import "bootstrap/scss/bootstrap.scss";
import "assets/scss/paper-kit.scss?v=1.3.0";
import "assets/demo/demo.css?v=1.3.0";
// pages
import Index from "views/Index.js";
import Narrativa from "views/vistasRocio/narrativa";
import Niveles from "views/vistasRocio/niveles";
import RegisterPage from "views/examples/RegisterPage.js";
import Recompensas from "views/vistasRocio/recompensas";


function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/index" render={(props) => <Index {...props} />} />
      <Route
        path="/narrativa"
        render={(props) => <Narrativa {...props} />}
      />
      <Route
        path="/niveles"
        render={(props) => <Niveles {...props} />}
      />
      <Route
        path="/recompensas"
        render={(props) => <Recompensas {...props} />}
      />
      <Route
        path="/retos"
        render={(props) => <RegisterPage {...props} />}
      />
    </Switch>
  </BrowserRouter>
  );
}

export default App;
