import {
  BrowserRouter as Router,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";

import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";

function ProfileCreation() {
  return (
    <Router>
      <Breadcrumbs />
      <Route path="/Education" exact component={Education} />
      <Route path="/Experience" component={Experience} />
      <Route path="/Skills" component={Skills} />
      <Route path="/VoluntaryIdentification" component={Voluntary} />
    </Router>
  );
}

export default ProfileCreation;

