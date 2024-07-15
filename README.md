# TeqTok

## Description
This application has been developed as a CMS-style blog site for engineers and developers to publish blogs and comment on blog posts to get the conversations going. 

## Table of Contents
- [Installation Instructions](#Installation-Instructions)
- [Usage Information](#Usage-Information)
- [License](#License)
- [Contributions](#Contributions)
- [Test Instructions](#Test-Instructions)
- [Additional Questions](#additional-questions-send-an-email-or-follow-the-link-to-my-github-profile)

## Installation Instructions
This application utilizes node package manager (npm). Inorder to run this application clone the repository and then enter "npm install" in the terminal. The database is required  for this app to function. In order to configure the database supply the following environment variables to a .env file: POSTGRESURI='YOURPOSTGRESURI' and SESSIONSECRET='STRING'. the repository's package.json file maintains the scripts necessary to install and run this application. After installing npm and configuring the .env file execute the seed script by executing the following command in the terminal: npm run seed. After the database has been seeded successfully start the application by entering the following command : npm start.

## Usage Information
The intended usage for this appilication is to publish written text information on the internet for the purpose of sharing knowlege and building comunities.

![](./public/images/TeqTok_demo-2.gif)

## License
![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)

## Link to Render deployment
https://teqtok.onrender.com/

## Contributions
peter.appliedanalyticalsciences@gmail.com

## Test Instructions
Currently this application can only be tested manually. In order to test this application manually follow the installation instructions and when the application is running successfully you may create a new user by navigating to the http://localhost:6174/ in your browser engine of choice and clicking the signup link. After logging in a logged in user can create new posts by accessing thier dashboard by following the respective link and clicking the add new post button located at the top right of the dashboard landing. Users can edit previously existing posts by clicking on the list items returned in the body of the dashboard page. The user can also delete posts. Articles generated by the users will appear on the homepage of the app where users can see all posts from all users. When a user selects a post on the homepage they can leave comments on that post when logged in. The user session is expected to maintain a durration of 16 min after which the user will be required to re-login in order to leave comments or access the dashboard and nested features.

## Additional Questions? Send an email or follow the link to my github profile:
Email - peter.appliedanalyticalsciences@gmail.com 
Github profile link - https://github.com/peteCodes4u
