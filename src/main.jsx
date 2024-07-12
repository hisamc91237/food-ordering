import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import Body from './components/Body.jsx';
import Contact from './components/Contact.jsx';
import About from './components/About.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Body />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
    </Route>,
  ),
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
);
