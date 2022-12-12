import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';


import UserPage from '../UserPage/UserPage';
import InfoPage from '../InfoPage/InfoPage';
import LandingPage from '../LandingPage/LandingPage';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';

import ProfileCreation from '../ProfileCreation/ProfileCreation';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import Education from '../Education/Education';
import Experience from '../Experience/Experience';
import Skills from '../Skills/Skills';
import CandidateProfile from '../CandidateProfile/CandidateProfile';
import Voluntary from '../Voluntary/Voluntary';


import ContactUsPage from '../ContactUsPage/ContactUsPage';
import OurStoryPage from '../OurStoryPage/OurStoryPage';
import FounderPage from '../FounderPage/FounderPage';

import './App.css';


function App() {
  const dispatch = useDispatch();

  const user = useSelector(store => store.user);

  useEffect(() => {
    dispatch({ type: 'FETCH_USER' });
  }, [dispatch]);

  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
          <Redirect exact from="/" to="/home" />

        
          <Route
            exact
            path="/founder"
          >
            <FounderPage />
          </Route>

          <Route
            exact
            path="/story"
          >
            <OurStoryPage/>
            </Route>
            


              
              
              
              <Route
            exact
            path="/contact"
          >
            <ContactUsPage/>
          </Route>

          {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:3000/user */}
          <ProtectedRoute
            // logged in shows UserPage else shows LoginPage
            exact
            path="/user"
          >
            <UserPage />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows UserPage else shows LoginPage
            exact
            path="/CandidateProfile"
          >
            <CandidateProfile />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows InfoPage else shows LoginPage
            exact
            path="/info"
          >
            <InfoPage />
          </ProtectedRoute>
          <ProtectedRoute
            // logged in shows InfoPage else shows LoginPage
            exact
            path="/ProfileCreation"
          >
            <ProfileCreation />
          </ProtectedRoute>
          <Router>
        <Breadcrumbs />
        <Route path="/Education" exact component={Education} />
        <Route path="/Experience" component={Experience} />
        <Route path="/Skills" component={Skills} />
        <Route path="/VoluntaryIdentification" component={Voluntary} />
      </Router>
          <ProtectedRoute
            // logged in shows InfoPage else shows LoginPage
            exact
            path="/Breadcrumbs"
          >
            <Breadcrumbs />
          </ProtectedRoute>

          <Route
            exact
            path="/login"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect to the /user page
              <Redirect to="/user" />
              :
              // Otherwise, show the login page
              <LoginPage />
            }
          </Route>

          <Route
            exact
            path="/registration"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect them to the /user page
              <Redirect to="/user" />
              :
              // Otherwise, show the registration page
              <RegisterPage />
            }
          </Route>

          <Route
            exact
            path="/home"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect them to the /user page
              <Redirect to="/user" />
              :
              // Otherwise, show the Landing page
              <LandingPage />
            }
          </Route>

          {/* If none of the other routes matched, we will show a 404. */}
          <Route>
            <h1>404</h1>
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
