# ShippingInfo
A demo shipping input built in ReactJS

## [Demo](http://maze.mrboolean.io/)

## Setup
 * Clone Repo
 * Run `yarn`
 * Run `yarn start` for the dev server
 * Run `yarn build` for the dist folder to be built out for deploy

# Tools Used
  
## Dev Tools

  Babel-es2015 - This provides es6 standards

  css-loader/styled-loader - Provides css capability for webpack

  uglifyjs - Used via webpack on build to minify and uglify the code

  webpack - Used to transpile down to browser compatable JS along with other functions

  webpack-dev-server - Used to do hot reloading

  yarn - Used instead of NPM, just a faster and more secure version of NPM

## Product Tools
  Axios - REST API Library

  Redux-Axios - Redux API Middleware for Axios
  
  prop-types - React Prop-Type validation
  
  react - ReactJS
  
  react-router - Used for navigation/routing
  
  redux - Used for Redux States

  styled-components - Used to style components in a clean and fast way.

## Notes

  Due to the time restraints, I wasn't able to do everything I wanted to do. If I was to rewrite the submit validation, I'd change how the redux state was laid out. Currently the form values are root level of the state, but I'd move them into a sub-object. I'd also store the field type and name of the field inside the sub-object so redux wouldn't need to know a list of fields for validation. You could also map the state and build out a list of fields to display if you did it that way, but that's an entirely different conversation. 

  I attempted to integrate the user-email API but wasn't able to because it wasn't allowing any CORS requests. This was discussed with Jake via Skype.

  The product showcase realisticly would need to be changed, currently it only works with a single value returned, as that's all I had available, but I know in some cases it would return multiple.

  On submit, the form should change from inputs to FormControl.Static when the form is submitted. --- I updated this, couldn't help myself haha ---

## Todo
 * Integrate Unit Testing
 * Actually store user form data
 * List Route for all submitted user data











