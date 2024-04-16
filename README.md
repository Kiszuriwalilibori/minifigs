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

### Steps to create copy for local use

1. Fetch/clone content of master branch of repo <https://github.com/Kiszuriwalilibori/minifigs> to newly created directory
2. Run npm install (note ready for yarn).
3. Register as user and obtain your own api key from https://rebrickable.com/
4. In project main directory add .env file with the following content

REACT_APP_API_KEY ={your api key}.

5. Start app with npm run
6. Enjoy app

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

### 1.0.6

checking app key availablity prior anything else

### 1.0.7

simplified validation: ErrorMessage component imported from newly added "@hookform/error-message

### TODO

fetchfunction albo przerobić na ReactQuery albo zrobić z niej osobny hook z własnym stanem, w każdym razie nie ma sensu żeby zajmował się jej wynikami redux

wzięcie pierwszego figa zawsze jest bez obrazka? rzuca alt text zamiast obrazka
zaskakująco duzo obrazków ma komunikat o błędzie w podglądzie sieci, z drugiej strony wszystkie sie wyświetlają.
zastosować card do drugiego ekranu
