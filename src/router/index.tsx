/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

// import { Redirect } from 'react-router'


import App from '../App';


export default () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/*" element={<Navigate to="/home" replace />} />
      <Route element={<App />} />
    </Routes>
  </Router>
);
