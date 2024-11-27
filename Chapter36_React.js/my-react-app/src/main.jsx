import { StrictMode } from 'react' //Specific module from react
//import { createRoot }  from 'react-dom/client' // This would import just the createRoot module and not all of ReactDOM
import React from "react"
import ReactDOM from "react-dom/client"
import './index.css' //importing a CSS file to style with
import App from './App.jsx' // typically the main jsx file that actually holds the display

//Modern version of the React-dom.render() method
ReactDOM.createRoot(document.getElementById('root')).render(

<StrictMode>
  <App />
</StrictMode>



)
