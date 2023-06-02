import './App.css';
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
import Presentacion from "views/vistasRocio/presentacion";
import Aventureros from "views/vistasRocio/aventureros";
// others

function App() {
  return (
    <div className="App">
      <BrowserRouter>
    <Switch>
      <Route path="/" render={(props) => <Index {...props} />} />
      <Route
        path="/presentacion"
        render={(props) => <Presentacion {...props} />}
      />
      <Route
        path="/aventureros"
        render={(props) => <Aventureros {...props} />}
      />
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
    </div>
  );
}

export default App;
