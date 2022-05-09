# The Problem

Rovers are due to land on Mars on a plateau. They will be navigated around the plateau (which is rectangular) by a team back on Earth so they can capture images of their surroundings.   Their current position is represented by x and y co-ordinates and a letter representing North, East, South or West. The plateau is divided into a grid, so an example position is 0, 0, N, which signifies that the rover is in the bottom left corner facing North.   To control the rover remotely, three letter commands are available – ‘L’, ‘R’ and ‘M’. ‘L’ and ‘R’ commands make the rover spin 90 degrees left or right respectively without moving forward. The ‘M’ command makes the rover move forward one grid point in the same direction it is already pointing.   Assume that the square directly North from (x, y) is (x, y+1) and the lower left co-ordinates are 0,0.   Input:   There are three inputs.   1.       The grid upper right boundary co-ordinates. No rover should be able to move off the plateau.    2.       The rover’s starting position on the plateau.   3.       The series of instructions given to the rover to get them to explore.   There are two rovers that have their inputs set at the same time but the second one starts to move when the first has finished moving.   Output:   The output for each rover should be its final co-ordinates and orientation.   Test Input:   5 5   1 2 N   LMLMLMLMM   3 3 E   MMRMMRMRRM   Expected Output:   1 3 N   5 1 E 

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
