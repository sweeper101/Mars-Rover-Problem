# The Problem

Rovers are due to land on Mars on a plateau. They will be navigated around the plateau (which is rectangular) by a team back on Earth so they can capture images of their surroundings.   Their current position is represented by x and y co-ordinates and a letter representing North, East, South or West. The plateau is divided into a grid, so an example position is 0, 0, N, which signifies that the rover is in the bottom left corner facing North.   To control the rover remotely, three letter commands are available – ‘L’, ‘R’ and ‘M’. ‘L’ and ‘R’ commands make the rover spin 90 degrees left or right respectively without moving forward. The ‘M’ command makes the rover move forward one grid point in the same direction it is already pointing.   Assume that the square directly North from (x, y) is (x, y+1) and the lower left co-ordinates are 0,0.   Input:   There are three inputs.   1.       The grid upper right boundary co-ordinates. No rover should be able to move off the plateau.    2.       The rover’s starting position on the plateau.   3.       The series of instructions given to the rover to get them to explore.   There are two rovers that have their inputs set at the same time but the second one starts to move when the first has finished moving.   Output:   The output for each rover should be its final co-ordinates and orientation.   Test Input:   5 5   1 2 N   LMLMLMLMM   3 3 E   MMRMMRMRRM   Expected Output:   1 3 N   5 1 E 

## Available Scripts

In the project directory, you can run:

### `Steps to start application`
1.### `npm install`
installs the node module dependencies

2.### `npm start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

3.### `npm run test`
Launches the test runner in the interactive watch mode.\

