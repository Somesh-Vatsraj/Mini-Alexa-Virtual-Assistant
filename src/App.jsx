import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Home } from './pages/Home';
import { CalculatorPage } from './pages/CalculatorPage';
import { GamesPage } from './pages/GamesPage';
import { QuotesPage } from './pages/QuotesPage';
import { ActivitiesPage } from './pages/ActivitiesPage';
import { PerceptronPage } from './pages/PerceptronPage';
import { SOSPage } from './pages/SOSPage';

export default function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <div className="main-content">
          <Header />
          <div className="content-body">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/calculator" element={<CalculatorPage />} />
              <Route path="/games" element={<GamesPage />} />
              <Route path="/quotes" element={<QuotesPage />} />
              <Route path="/activities" element={<ActivitiesPage />} />
              <Route path="/perceptron" element={<PerceptronPage />} />
              <Route path="/sos" element={<SOSPage />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}
