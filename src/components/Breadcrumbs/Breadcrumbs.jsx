import {
  BrowserRouter as Router,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";

import './Breadcrumbs.css'

function Breadcrumbs() {
  let match = useRouteMatch();

  return (

    <nav>
      <ul className="breadcrumb">
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
      </ul>
      <h1>Welcome To Faceless Pro!</h1>
      <p></p>
    </nav>

  );
}
export default Breadcrumbs;

  //this is rendering as a list view currently