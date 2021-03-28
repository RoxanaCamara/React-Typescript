import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Dashboard from "../components/InicioScreen/MenuInicioScreen";
import ModalLogin from "../components/login/ModalLogin";
import ModalRegister from "../components/login/ModalRegister";

export default function AppRouters( prop: any) {

  return (
    <Router>
      <div>
        <Switch>
          <Route path={'/'} exact component={ Dashboard } />
          <Route exact path="/login" component={ ModalLogin }></Route>
          <Route exact path="/register" component={ModalRegister}></Route>
        </Switch>
      </div>
    </Router>
  );
}
