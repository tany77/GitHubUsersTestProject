import { Switch, Route } from "react-router-dom";
import UsersPage from "./components/UsersPage";
import UserDetailsPage from "./components/UserDetailsPage";

const Routes = () => {
  return (
    <Switch>
      <Route path="/users" component={UsersPage} />
      <Route path="/user-details/:username" component={UserDetailsPage} />
      <Route path="/" component={UsersPage} exact />
    </Switch>
  );
};
export default Routes;
