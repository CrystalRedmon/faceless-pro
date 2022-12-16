import {
  BrowserRouter as Router,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import {useSelector} from 'react-redux';

import './Breadcrumbs.css'

function Breadcrumbs() {
  const [profile, setProfile] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();

  let match = useRouteMatch();

  return (

    <nav>
      <ul class="breadcrumb">
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
      <h1>Complete your Profile</h1>
      {/* <div class="flex-parent jc-center">
<button type="submit" onClick={getBreadcrumbs}>Continue</button>
</div>  */}
      

    </nav>
    

  );
}
export default Breadcrumbs;

  //this is rendering as a list view currently