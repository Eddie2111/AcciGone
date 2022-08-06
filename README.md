# Real time map plotting using mapbox on React

When data[X,Y Coordinate] is recieved by axios, it will pop up a balloon on that location. 
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). But custom css are more used in here.

- This was an unfinished project
- Currently runs on nodejs backend with mysql database
- will be replacing mapbox with barikoi api

## Available Script Commands

I haven't changed the core NPM commands. So, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
If not, check the package.json to see what port number is given.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
- I have no idea what it does.

### `npm build`

Builds the app for production to the `build` folder.\
It bundles all the node modules of React in production mode and optimizes the build for the best performance.
Basically it makes the server a static site. Of course, if your axios is functional, it will update data.

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm eject`

It removes all the node modules installed in your react app. Just like removing registry of a windows machine lol.

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

