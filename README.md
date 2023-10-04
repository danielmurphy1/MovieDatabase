# Movie Database Search App

_Web Based Movie Databased API Search Application_


![Search Results Full Screen](https://github.com/danielmurphy1/MovieDatabase/blob/main/Screenshots/SearchResultsFull.JPG)
![Search Results Mobile](https://github.com/danielmurphy1/MovieDatabase/blob/main/Screenshots/SearchResultsMoible.JPG)
![Search History Full Screen](https://github.com/danielmurphy1/MovieDatabase/blob/main/Screenshots/SearchHistoryFull.JPG)
![Search History Mobile](https://github.com/danielmurphy1/MovieDatabase/blob/main/Screenshots/SeachHistoryMobile.JPG)
## Instructions

To Download and Run Locally

1. Clone Code Locally from GitHub
2. Visit [OMDb API](http://www.omdbapi.com/) and sign up for your own API Key
3. CD into project directory
4. Run `npm install` (or `npm i`) in terminal to install packages and dependencies
5. In the `app` directory inside `src`, rename `ApiKey.ts.sample` to `ApiKey.ts`. Insert your ApiKey string.
6. Run `ng serve` in terminal to start application locally. If the browser does not open automatically, open manually and navigate to `http://localhost:4200/` 

To Use Locally or Accessing at Below Link

The user can search by full or partial movie name to return movies that match the search string. Click on the button to see your past searches. Search history is saved and local storage, and can be cleared using the `localStorage.clear()` method in the dev tools console, or by manually deleting from local storage in dev tools.


Access the app [here](https://dmurphy-moviedatabase.netlify.app)

### Summary

I created this application to get more experience using Angular in personal projects. I learned more about passing data to components directly using property binding and also using services to do so. And since I really like movies, the OMDb API was a cool tool to work with for that purpose. 

I also used the [NGB Library](https://ng-bootstrap.github.io/releases/14.x/#/home) for the pagination component. It was very simple to work with, as the docs are well maintained. I found that it was simple to use with Angular, and the property bindings were intuitive and easy to understand following the documentation. 

### Author

- Dan Murphy, Full-Stack Developer, https://www.linkedin.com/in/daniel-murphy-055/