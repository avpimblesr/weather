import { Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import LoginForm from "./components/LoginForm";
import Forecast from "./components/forecast/Forecast";
import RegistrationForm from "./components/RegistrationForm";

import Container from "@material-ui/core/Container";

import "./App.css";

function App() {
  return (
    <Container maxWidth="sm">
      <Navigation position="fixed" />

      <section className="console">
        <Switch>
          <Route exact path="/">
            <LoginForm />
          </Route>

          <Route path="/forecast">
            <Forecast />
          </Route>

          <Route path="/registration">
            <RegistrationForm />
          </Route>
        </Switch>
      </section>
    </Container>
  );
}

export default App;
