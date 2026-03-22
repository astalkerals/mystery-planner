import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Layout from "./Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Collection from "./pages/Collection";
import Build from "./pages/Build";
import BuildCrime from "./pages/BuildCrime";

const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path = "/" element = {<Home />}>
          <Route index element={<Home />}/>
          <Route path="about" element={<About />} />
          <Route path="collection" element={<Collection />} />
          <Route path="build" element={<Build/>}/>
          <Route path="buildCrime" element={<BuildCrime />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
