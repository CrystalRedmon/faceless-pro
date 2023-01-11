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
import LandingPage from '../LandingPage/LandingPage';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import FounderPage from '../FounderPage/FounderPage';
import OurStoryPage from '../OurStoryPage/OurStoryPage';
import ContactUsPage from '../ContactUsPage/ContactUsPage';
import PostJob from '../PostJob/PostJob';
import EmployerJobList from '../EmployerJobList/EmployerJobList';
import EmployerJobDetails from '../EmployerJobDetails/EmployerJobDetails';
import StartProfile from '../StartProfile/StartProfile';
import ProfileCreation from '../ProfileCreation/ProfileCreation';
import Education from '../Education/Education';
import Experience from '../Experience/Experience';
import Skills from '../Skills/Skills';
import CandidateProfile from '../CandidateProfile/CandidateProfile';
import UserTypeChoice from '../UserTypeChoice/UserTypeChoice';
import CandidateLandingPage from '../CandidateLandingPage/CandidateLandingPage';
import EmployerLandingPage from '../EmployerLandingPage/EmployerLandingPage';
import SavedJobsPage from '../SavedJobsPage/SavedJobsPage';
import CandidateAppliedJobsPage from '../CandidateAppliedJobsPage/CandidateAppliedJobsPage';
import ViewApplicantsPage from '../ApplicantsPage/ApplicantsPage';
import EmployerProfilePage from '../EmployerProfilePage/EmployerProfilePage';
import ApplicantProfile from '../ApplicantProfile/ApplicantProfile';
import CandidateJobDetails from '../CandidateJobDetails/CandidateJobDetails';
import CandidateHyperLink from '../Hyperlink/Hyperlink';
import ResumeCoverLetter from '../ResumeCoverLetter/ResumeCoverLetter';
import CandidateHomepage from '../CandidateHomepage/CandidateHomepage';
import Message from '../../Message/Message';

import './App.css';

function App() {
  const dispatch = useDispatch();

  const user = useSelector(store => store.user);

  useEffect(() => {
    dispatch({
      type: 'FETCH_CANDIDATE_INFO',
    })
    dispatch({ type: 'FETCH_USER' });
  }, [dispatch]);

  return (
    <Router>
      <div id="main">
        <Nav />
        <Switch>
          {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
          <Redirect exact from="/" to="/home" />

          <ProtectedRoute
            exact
            path="/profile"
          >
            <CandidateProfile />

          </ProtectedRoute>

          <ProtectedRoute
            exact
            path="/hyperlink"
          >
            <CandidateHyperLink />
          </ProtectedRoute>


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
            <OurStoryPage />
          </Route>

          <Route
            exact
            path="/contact"
          >
            <ContactUsPage />
          </Route>


          {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:3000/user */}
          <ProtectedRoute
            exact
            path="/user"
          >
            {user.user_type === null ?
              <UserTypeChoice />
              :
              <></>
            }
            {user.user_type === 'candidate' ?
              <CandidateLandingPage />
              :
              <></>
            }
            {user.user_type === 'employer' ?
              <EmployerLandingPage />
              :
              <></>
            }
          </ProtectedRoute>

          <ProtectedRoute
            //
            exact
            path="/message/:id"
          >
            <Message />
          </ProtectedRoute>

          <ProtectedRoute
            exact
            path="/CandidateJobDetails/:id"
          >
            <CandidateJobDetails />
          </ProtectedRoute>

          <ProtectedRoute

            exact
            path="/CandidatePage"
          >
            <CandidateHomepage />
          </ProtectedRoute>

          <ProtectedRoute

            exact
            path="/user/employerhomepage"
          >
            <EmployerJobList />
          </ProtectedRoute>

          <ProtectedRoute
            exact
            path="/ProfileCreation"
          >
            <ProfileCreation />
          </ProtectedRoute>


          <ProtectedRoute
            exact
            path="/details/:id"
          >
            <EmployerJobDetails />
          </ProtectedRoute>

          <ProtectedRoute
            exact
            path="/viewApplicantsPage/:id"
          >
            <ViewApplicantsPage />
          </ProtectedRoute>

          <ProtectedRoute
            exact
            path="/ApplicantProfile/:id/:jobId"
          >
            <ApplicantProfile />
          </ProtectedRoute>

          <ProtectedRoute
            exact
            path="/jobForm"
          >
            <PostJob />
          </ProtectedRoute>

          <ProtectedRoute
            exact
            path="/job/:id/edit"
          >
            <PostJob />
          </ProtectedRoute>

          <ProtectedRoute
            exact
            path="/jobList"
          >
            <EmployerJobList />
          </ProtectedRoute>
          <ProtectedRoute
            exact

            path="/StartProfile"
          ><StartProfile />
          </ProtectedRoute>

          <ProtectedRoute
            exact
            path="/savedjobs"
          >
            <SavedJobsPage />
          </ProtectedRoute>

          <ProtectedRoute
            exact
            path="/applied"
          >
            <CandidateAppliedJobsPage />
          </ProtectedRoute>

          <ProtectedRoute
            exact
            path="/Breadcrumbs"

          >
            <StartProfile />
          </ProtectedRoute>


          <ProtectedRoute
            exact
            path='/user/editprofile'

          >
            <EmployerProfilePage />
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
            <LandingPage />
          </Route>

          <ProtectedRoute exact path="/ResumeCoverLetter">
            <ResumeCoverLetter />
          </ProtectedRoute>

          <ProtectedRoute exact path="/Education">
            <Education />
          </ProtectedRoute>

          <ProtectedRoute exact path="/Experience">
            <Experience />
          </ProtectedRoute>

          <ProtectedRoute exact path="/Skills">
            <Skills />
          </ProtectedRoute>

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
