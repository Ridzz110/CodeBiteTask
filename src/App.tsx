import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPages from './Pages/LandingPages';
import Hero1 from './Pages/Hero1';
import Hero2 from './Pages/Hero2';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPages />} />
        <Route path="/hero1" element={<Hero1 />} />
        <Route path="/hero2" element={<Hero2 />} />
      </Routes>
    </Router>
  );
}

export default App;
