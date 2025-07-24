# GoDaddy Repos App

A React application that fetches and displays GoDaddy's GitHub repositories. I included the names as the links to click, and when clicked should present information. Also added a way to go back home. Structured in a simple and concise way to understand the repo information that was given. Data is fetched only once and information that is shown is what was given as an example. I also added error handling and loading states just in case the API takes longer than expected or if there's an error. 

- \repo\:name its meant to create a sense that you are in the GoDaddy Repository 
- I created this in the recommended time and if I had more time I would of definitely created a mock test for the API and component functionaliy, I used console logs and chrome dev tools to debug and test the application. But overall would of also made the app way prettier.

## Files Included

- `App.jsx` - Main component with API call, routing, and error/loading states
- `RepoInformation.jsx` - Component that displays individual repository details
- `App.css` and `index.css` - Basic styling for the application
- `main.jsx` - added BrowserRouter wrapper

## Installation

1. Create the react project: `npm create vite@latest my-godaddy-app -- --template react `

2. Install the required dependencies: `npm install axios react-router-dom`

3. Replace the contents of `src` with my files

4. reminder to update `main.jsx` to include BrowserRouter:

## Technologies I Used

I chose axios for making API calls because I've used it before in different projects. It handles HTTP requests in a elegant way and makes working with JSON straightforward. Plus, it has great error handling built-in. Also I used React Router to handle navigation as I've used it before as well. So it pretty easy to go to new pages without creating seperate HTML files.


