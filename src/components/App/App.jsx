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
import FounderPage from '../FounderPage/FounderPage';
import OurStoryPage from '../OurStoryPage/OurStoryPage';
import ContactUsPage from '../ContactUsPage/ContactUsPage';
import PostJob from '../PostJob/PostJob';
import EmployerJobList from '../EmployerJobList/EmployerJobList';
import EmployerJobDetails from '../EmployerJobDetails/EmployerJobDetails';

import StartProfile from '../StartProfile/StartProfile';
import ProfileCreation from '../ProfileCreation/ProfileCreation';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import Education from '../Education/Education';
import Experience from '../Experience/Experience';
import Skills from '../Skills/Skills';
import CandidateProfile from '../CandidateProfile/CandidateProfile';
import Voluntary from '../Voluntary/Voluntary';
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

//import CandidateProfilePage from '../CandidateProfilePage/CandidateProfilePage';
import CandidateHomepage from '../CandidateHomepage/CandidateHomepage';

import Message from '../../Message/Message';
import EditCandidateProfile from '../EditCandidateProfile/EditCandidateProfile';
import EditEducation from '../Education/EditEducation';
import './App.css';
import Hyperlink from '../ApplicantProfile/Hyperlink';


function App() {
  const dispatch = useDispatch();

  const user = useSelector(store => store.user);

  useEffect(() => {
    dispatch({
      type: 'FETCH_CANDIDATE_INFO',
    })
    dispatch({ type: 'FETCH_USER' });
  }, [dispatch]);

  //   useEffect(() => {
  //     dispatch({
  //         type: 'FETCH_CANDIDATE_INFO',
  //     })
  // }, [])
  const info = useSelector(store => store.candidateReducer.candidateInfo);

  console.log('info', info)
  return (
    <Router>
      <div>
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
            // logged in shows UserPage else shows LoginPage
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


          {/* <ProtectedRoute
            //
            exact
            path="/CandidateLandingPage"
          >
            <CandidateLandingPage />
          </ProtectedRoute> */}

          <ProtectedRoute
            //
            exact
            path="/message/:id"
          >
            <Message />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows UserPage else shows LoginPage
            exact
            path="/CandidateJobDetails/:id"
          >
            <CandidateJobDetails />
          </ProtectedRoute>


          {/* <ProtectedRoute
            exact
            path="/CandidateProfile"
          >
            <CandidateProfile />
          </ProtectedRoute> */}
{/* 
          <ProtectedRoute
            // logged in shows InfoPage else shows LoginPage
            exact
            path="/user/editCandidate"
          >
            <CandidateProfilePage />
          </ProtectedRoute>  */}
          <ProtectedRoute
            // logged in shows InfoPage else shows LoginPage
            exact
            path="/CandidatePage"
          >
            <CandidateHomepage />
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


          <ProtectedRoute
            // logged in shows supplies details based on supplies.id
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
            // logged in shows InfoPage else shows LoginPage
            exact
            path="/jobForm"
          >
            <PostJob />
          </ProtectedRoute>


          {/* <ProtectedRoute
          <ProtectedRoute
            // logged in shows InfoPage else shows LoginPage
            exact
            path="/job"
          >
            <Breadcrumbs /> */}
          {/* </ProtectedRoute> */}



          {/* <ProtectedRoute
            // logged in shows InfoPage else shows LoginPage
            exact
            path="/Breadcrumbs"
          >
            <Breadcrumbs />
          </ProtectedRoute> */}

          <ProtectedRoute
            // logged in shows InfoPage else shows LoginPage
            exact
            path="/job/:id/edit"
          >
            <PostJob />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows InfoPage else shows LoginPage
            exact
            path="/jobList"
          >
            <EmployerJobList />
          </ProtectedRoute>
          <ProtectedRoute
            // logged in shows InfoPage else shows LoginPage
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
            // logged in shows InfoPage else shows LoginPage
            exact
            path="/Breadcrumbs"

          >
            <StartProfile />
          </ProtectedRoute>


          <ProtectedRoute
            // logged in shows InfoPage else shows LoginPage
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
          {/* <ProtectedRoute exact path="/Education">
            {education.id === 0 ?  
              <Education />
              :
              <EditEducation />
            }
            </ProtectedRoute> */}
          
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
          {/*
          <ProtectedRoute>
            <Breadcrumbs />
            <Route path="/CandidateProfile" exact component={CandidateLandingPage} />
            <Route path="/Education" exact component={Education} />
            <Route path="/Experience" component={Experience} />
            <Route path="/Skills" component={Skills} />
            <Route path="/VoluntaryIdentification" component={Voluntary} />
          </ProtectedRoute>
          */}



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
