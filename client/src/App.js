import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layout';
import Combo from './pages/combo'
import LoginPage from './components/loginPage';
import RegisterPage from './components/registerPage';
import {UserContextProvider} from './userContext';
import Homepage from './Homepage';
import Cart from './pages/cart';
import Services from './pages/Services';
import SpecialOffer from './pages/SpecialOffer';
import Flutterwave from './flutterwave'


const App = () => {
  return (
    <UserContextProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Homepage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/payment" element={<Flutterwave />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/services" element={<Services />} />
            <Route path="/specialoffers" element={<SpecialOffer />} />
            <Route path="/api/getcombos" element={<Combo />} />
          </Route>
        </Routes>
      </Router>
    </UserContextProvider>
  );
};

export default App;





