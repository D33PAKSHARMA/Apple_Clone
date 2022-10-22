import BrowserRouter from 'react-router-dom/BrowserRouter'
import React from "react";
import ReactDOM from "react-dom";

// import "./index.css";
import App from "./App";
// import reportWebVitals from "./reportWebVitals";

// Bootstrap CSS import 
import 'bootstrap/dist/css/bootstrap.min.css';


// ReactDOM.render(<App />, document.getElementById("root"));

// import BrowserRouter from 'react-router-dom/BrowserRouter'

ReactDOM.render((
   <BrowserRouter basename={process.env.PUBLIC_URL}>
     <App />
   </BrowserRouter>
),document.getElementById("root"));