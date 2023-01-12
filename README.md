# Faceless Pro

## Table of Contents

- [Description](#description)
- [Built With](#built-with)
- [Prerequisites](#prerequisite)
- [Installation](#installation)
- [Usage](#usage)
    

## Description


Faceless Pro is a blind recruitment job board that aims to eliminate unconscious bias and discrimination against job applicants.
It does this by concealing all personal information like name, age, race, and gender.  For example, instead of their name, applicants are given a random identifier that includes a combination of an animal and an object, like  Elephant Paper. Employers can post, delete and edit jobs. Applicants can search, save and apply for jobs. Employers and applicants have the ability to send each others messages. Lastly, applicants can reveal their identity, choosing which employers and when to do so, providing them complete control of their anonymity.


## Built With

<a href="https://www.w3schools.com/w3css/defaulT.asp"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" height="40px" width="40px" /></a>
<a href="https://www.w3schools.com/html/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" height="40px" width="40px" /></a>
<a href="https://www.w3schools.com/js/default.asp"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" height="40px" width="40px" /></a>
<a href="https://www.postgresql.org/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg" height="40px" width="40px" /></a>
<a href="https://reactjs.org/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" height="40px" width="40px" /></a>
<a href="https://redux.js.org/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" height="40px" width="40px" /></a>
<a href="https://material-ui.com/"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/materialui/materialui-original.svg" height="40px" width="40px" /></a>
<a href="https://nodejs.org/en/"><img src="https://github.com/devicons/devicon/blob/master/icons/nodejs/nodejs-plain.svg" height="40px" width="40px" /></a>
<a href="https://www.npmjs.com/package/multer"><img src="https://res.cloudinary.com/practicaldev/image/fetch/s--q4ySUfWB--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://thepracticaldev.s3.amazonaws.com/i/hryq136swg3qzhjsq309.png" height="40px" width="40px" /></a>
## Getting Started

This project should be able to run in your favorite IDE. I used VS code while building it. 
<a href="https://code.visualstudio.com/"><img src="https://github.com/devicons/devicon/blob/master/icons/vscode/vscode-original-wordmark.svg" height="40px" width="40px" /></a>

### Prerequisites
Before you get started, make sure you have the following software installed on your computer:

- [Node.js](https://nodejs.org/en/)

### Installation

1. Fork the repository
2. Copy the SSH key in your new repository
3. In your terminal type...  `git clone {paste SSH link}`
4. Navigate into the repository's folder in your terminal
5. Open VS Code (or editor of your choice) and open the folder
6. In the terminal of VS Code run `npm install` to install all dependencies
7.  Create a `.env` file at the root of the project and paste this line into the file:
8. Create a database named `faceless_pro` in PostgresSQL
If you would like to name your database something else, you will need to change `faceless_pro` to the name of your new database name in `server/modules/pool.js`
9. The queries in the database.sql file are set up to create all the necessary tables that you need. Copy and paste those queries in the SQL query of the database. If you'd like to add dummy data in the database to test the app, you can run this command in your code editor terminal, psql -d faceless_pro -f dummyDataDump.sql, which will create a postico database using the dummyDataDump.sql file. If this is going to production, leave out the dummy data.
10. Run `npm run server` in your VS Code terminal
11. Open a second terminal and run `npm run client`

## Usage

Once everything is installed and running it should open in your default browser - if not, navigate to http://localhost:3000/#/.

Video walkthrough of application usage: https://www.youtube.com/watch?v=eA0X-KlWsqM&ab_channel=DanielPathammavong

## Deployment
- Login Credentials for Heroku have been provided in the hand off document.
- If you need make changes you wish to push to the deployed app, you must login, go into the pet-star section, go to the deploy tab, and then manually deploy. You can reconfigure this to redeploy automatically if you wish, which is on the same page.
- Environment variables are kept on Heroku in the Settings tab, just click the Reveal Config Vars button
- To set up the DB, we used Postico, just plug the information from Heroku into a new favorite. The Information for this can be found in the Resources tab, by clicking the Postgres add on. From there it will bring you to a new page where you will go into the settings tab and click view credentials. 

- If you'd like to create new users (also a hacky way to change password) you must:
1. Go into the user router
1. Uncomment the route
1. Push changes and redeploy app
1. Register User
1. Comment out the route back in VSCode
1. Push changes
1. Redeploy
