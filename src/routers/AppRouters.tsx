import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { InicioScreen } from "../components/InicioScreen/InicioScreen";
import ModalLogin from "../components/login/ModalLogin";
import ModalRegister from "../components/login/ModalRegister";

export default function AppRouters() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/login" component={ ModalLogin }></Route>
          <Route exact path="/register" component={ModalRegister}></Route>
          <Route exact path="/" component={InicioScreen}></Route>
        </Switch>
      </div>
    </Router>
  );
}
