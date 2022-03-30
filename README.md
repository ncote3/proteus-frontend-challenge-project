# proteus-frontend-challenge-project

Welcome to the Proteus Motion Android Challenge Project. We hope you find this project fun and enjoyable.

## User Story

As an athlete or athletic trainer, I would like the ability to compare my performance to other, similar athletes. 

## Your Task

Given the below requirements, implement a User Interface that allows a user to select the specific cohort they want to compare themselves against.

## Design
<img width="388" alt="Screen Shot 2022-03-30 at 10 39 57 AM" src="https://user-images.githubusercontent.com/1988962/160861513-5ee596c2-524a-40bd-88fc-1556bd03c5ea.png">


## Requirements

1. Create a scrollable container with 2 buttons fixed at the bottom: Cancel and Apply Filters.
2. Implement a slider component that allows a user to select a weight range. The minimum selectable weight should read "Under 70" and the maximum weight should read "Over 295." The slider can be moved in increments of 15.
3. Implement a slider component that allows a user to select a height range with a minimum of 4'8" and a maximum of 7'0" in increments of 4".  
4. Implement a set of radio buttons that allows a user to select which sport they participate in. A user can only select one sport.
5. Implement a set of radio buttons that allows a user to select which position they particpate in. A user can only select a position if they have selected a sport. 
6. When a user clicks "Apply filters" log to the console a JSON blob that describes the current state of the filters.

### Technical Details
- You are free to use any open source libraries you choose
- We encourage use of [Create React App](https://create-react-app.dev/) to help bootstrap the project, but it is not required
- Please include a Git history
- The project should be runnable via `npm run start`
- When finished, please submit a .zip file containing the repository and Git history

## Grading Criteria
- Correctness: Does your solution meet the requirements? Does it work?
- Code Quality & Architecture: Does your solution utilize best practices? Is it readable and well organized? Consider adding a few tests.
- Usability: While we have included a mockup, we do not expect a pixel perfect implementation of the design. However, e will be grading your project on basic UI/UX principles.
