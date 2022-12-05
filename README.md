# Get Harry

[![N|Solid](https://cldup.com/dTxpPi9lDf.thumb.png)](https://nodesource.com/products/nsolid)

## Objective of this project

-   Demonstrate knowledge of React, Redux, Router
-   Be a a playground for exercising a.m. technologies

### Features

-   finds all minifigs of Harry Potter in certain database
-   draws 3 of them
-   displays the randomly chosen ones
-   let select one of them
-   prepares order form for given minifig
-   sends order to fake endpoint
-   if order send is OK it displays appropriate message and redirect to initial page

### Tech

The following tools and resources has been used while developing Google Books

-   [ReactJS](https://reactjs.org/) - HTML enhanced for web apps!
-   [Visual Studio Code](https://code.visualstudio.com/) - awesome web-based text editor
-   [Webpack](https://webpack.js.org/) - bundles assets
-   [SASS/SCSS](https://sass-lang.com/) - CSS with superpowers
-   [Redux 4.0](https://redux.js.org/) - A Predictable State Container for JS Apps
-   [Material UI](https://material-ui.com/) - React components for faster and easier web development
-   [React Router](https://courses.reacttraining.com/p/react-router-5) - Declarative routing for React

### Installation

-   Not required. Just open index.html in the browser
-   For local use: fetch/copy while content of repo <https://github.com/Kiszuriwalilibori/minifigs> master branch
-   run npm install (here and below - assume youse of npm, for yarn or others use equivalents)
-   receive API access key
-   create .env file with content REACT_APP_MINIFIGS_KEY = your key here
-   run npm start

### Browser limitations

-   No suppport provided for Opera Mini nor IE

### Version

#### 1.0.0

initial

#### 1.0.1

fade removed, on Selectpage replaced with custom function which checks whether all images are loaded
categories are rendered initially on Intropage

### TODO

<!--

003 https://rebrickable.com/api/v3/lego/minifigs/?key=e007ad9e034759e1cf1bc9128813e890&?search=harry%20potter
to działa

004 https://rebrickable.com/api/v3/lego/themes/?key=e007ad9e034759e1cf1bc9128813e890 a to opbiera stronę kategorii -->
