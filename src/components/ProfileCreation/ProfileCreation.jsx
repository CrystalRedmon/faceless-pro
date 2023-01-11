import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";

// NOT USED IN APP

function ProfileCreation() {
  return (
    <Router>
      <Breadcrumbs />
      <Route path="/CandidateProfile" exact component={Education} />
      <Route path="/Education" exact component={Education} />
      <Route path="/Experience" component={Experience} />
      <Route path="/Skills" component={Skills} />
      <Route path="/VoluntaryIdentification" component={Voluntary} />
    </Router>
  );
}

export default ProfileCreation;