import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './componentes/Home/Home';

ReactDOM.render(
    <Router>
        <Routes>
            {/* Páginas */}
            <Route exact path='/' element={<Home />}>
                
            </Route> 
        </Routes>
    </Router>,
    document.getElementById('root')
  );