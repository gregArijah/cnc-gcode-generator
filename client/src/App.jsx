import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProtectedRoute from './components/protectedRoute';

import Home from './pages/Home';
import Main from './pages/main/App_Main';

export default function App(){
  return (
      <Router basename = '/javatrol'>
        <Routes>
            <Route path ='/' element={<Home />} />
            <Route element={<ProtectedRoute />} >
              <Route path ='/app' element={<Main />} />
            </Route>
        </Routes>
      </Router>
  )
}




