Backend runs on 8085
Angular frontend runs on 4200
to establish connection between frontend and backend, add
    proxy.config.json file with
{
    "/api":{
        "target":"http://localhost:8085",
        "secure": false
    }
}

and add few lines in angular.json file
 "options": {
            "proxyConfig": "src/proxy.config.json"
          },
in serve section

React frontend - 
using vite
npm create vite@latest my-frontend 
cd my-frontend
npm install
npm run dev - react app runs on port 5173

to change the port from 5173 to 3000, add below lines in vite.config.js
server: {
    port: 3000
  }

npm install bootstrap --save
npm install axios --save             //need Axios to make API calls
npm install react-router-dom --save


using npx
npx create-react-app my-app
if error: cd my-app and npm install react@18 react-dom@18 react-scripts and npm install
npm install axios

