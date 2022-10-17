import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// pages
import Home from './Views/Home';
import Login from './Views/Login';
import Signup from './Views/Signup';
import About from './Views/About';
import Settings from './Views/Settings';
import Details from './Views/Details';
import NotFound from './Views/NotFound';
// pages

import { BrowserRouter,Route,Routes } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import 'mapbox-gl/dist/mapbox-gl.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/home" index element={<Home />} />
      <Route path="/login"      element={<Login />} />
      <Route path="/signup"     element={<Signup />} />
      <Route path="/details"    element={<Details />} />
      <Route path="/about"      element={<About />} />
      <Route path="/settings"   element={<Settings />} />
      <Route path="*"           element={<NotFound />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
console.log(reportWebVitals());
