import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/Scroll'; // Make sure path is correct

// Pages
import Home from './components/Home';
import BookingPage from './components/BookingPage';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book-a-call" element={<BookingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
