import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Form from './pages/Form';
import Preview from './pages/Preview';
import { createContext, useState } from 'react';

export const PortfolioContext = createContext();

function App() {
  const [portfolioData, setPortfolioData] = useState({
    name: '',
    bio: '',
    skills: [],
    projects: [],
    social: { github: '', linkedin: '', twitter: '' },
    theme: 'light'
  });

  return (
    <PortfolioContext.Provider value={{ portfolioData, setPortfolioData }}>
      <div className="min-h-screen bg-primary-light dark:bg-primary-dark text-text-light dark:text-text-dark">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<Form />} />
          <Route path="/preview" element={<Preview />} />
        </Routes>
      </div>
    </PortfolioContext.Provider>
  );
}

export default App;