import {
    BrowserRouter as Router,
    Route,
    Link,
    useRouteMatch
  } from "react-router-dom";
  
  function Breadcrumbs() {
    let match = useRouteMatch();
  
    return (
      <nav>
        <ol>
          <li>
            <Link to={`${match.url}/Education`}>Education</Link>
          </li>
          <li>
            <Link to={`${match.url}/Experience`}>Experience</Link>
          </li>
          <li>
            <Link to={`${match.url}/Skills`}>Skills</Link>
          </li>
        </ol>
      </nav>
    );
  }
  
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
  