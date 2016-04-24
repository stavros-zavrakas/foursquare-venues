# Simple foursqare integration

**MVC approach:**

The events are initialized during document ready and the important dependencies like models, renderer etc are injected in the events.

**Libs that are used to build this project:**
- jQuery
- Bootstrap 3

**Steps to build and run this project:**
- npm install
- npm run client:build
- npm start

**Linting the code:**
- npm run lint

**Useful tasks during development:**
- npm run client:clean:css
- npm run client:copy:css
- npm run client:clean:js
- npm run client:copy:js
- npm run client:clean
- npm run client:build

The server grabs the configuration from the .env file (root of the project). This is the default behaviour of [node foreman](https://github.com/strongloop/node-foreman). Remove the CONCURRENCY env var from this file if you want to start on a cluster depending on the number of CPUs or change the PORT if you want to listen to different port than 8080.