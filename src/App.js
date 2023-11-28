import React from 'react-dom'
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Booking from './components/Booking'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Routes, Route } from 'react-router-dom';
import AccountLogin from './components/AccountLogin';
import Stepprogress from './components/Stepprogress';


function App() {

    return (
      <>
        <Navigation />
          <Routes>
            <Route path="/" element={<Stepprogress />} />
2            <Route path="/booking" element={<Booking />} />
            <Route path="/login" element={<AccountLogin />} />
          </Routes>
        <Footer />
      </>
    );S
}

export default App;




