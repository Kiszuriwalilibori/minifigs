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

#### 1.0.2

selected minifig based on createSlice
required form fields marked with \*
after redirect back to initial page counter is reset

### 1.0.3

reasonably persistent
body restyled to have background color to avoid blinking when navigation happens
parts are displayed after all of them are loaded
select styles well also for 1 or 2 minifigs found

### 1.0.4

fix for no-internet connection
RTK Query with refetch on restored internet connection
selected fig is available as filtered one from draw, with memoised selector

### 1.0.5

Error and loading indicator as portals now
refectored Teaser
counter has separate reducer
runningStatus imported by selectors
selected minifig is taken by filtering exissting draw, without creating new state item
precautions against trying to fetch anything when network is not available

### TODO

fetchfunction albo przerobić na ReactQuery albo zrobić z niej osobny hook z własnym stanem, w każdym razie nie ma sensu żeby zajmował się jej wynikami redux

error jako portal

wzięcie pierwszego figa zawsze jest bez obrazka? rzuca alt text zamiast obrazka
zaskakująco duzo obrazków ma komunikat o błędzie, z drugiej strony wszystkie sie wyświetlaja.
