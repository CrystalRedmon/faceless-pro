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
            <Link to={`${match.url}Education`}>Education</Link>
          </li>
          <li>
            <Link to={`${match.url}Experience`}>Experience</Link>
          </li>
          <li>
            <Link to={`${match.url}Skills`}>Skills</Link>
          </li>
          <li>
            <Link to={`${match.url}VoluntaryIdentification`}>Voluntary</Link>
          </li>
        </ol>
      </nav>
    );
  }
  export default Breadcrumbs;

  //this is rendering as a list view currently