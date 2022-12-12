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
      </Router>
    );
  }

  export default ProfileCreation;

  