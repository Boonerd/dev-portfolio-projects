import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Form from './pages/Form';
import Preview from './pages/Preview';
import { createContext, useState } from 'react';
import ThemeSwitcher from './components/ThemeSwitcher';

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

  const themes = {
    light: { 
      bg: 'bg-primary-light', 
      darkBg: 'dark:bg-primary-dark', 
      text: 'text-text-light', 
      darkText: 'dark:text-text-dark',
      inputBg: 'bg-white dark:bg-gray-700',
      inputBorder: 'border-gray-300 dark:border-gray-600'
    },
    dark: { 
      bg: 'bg-primary-dark', 
      darkBg: 'dark:bg-primary-dark', 
      text: 'text-text-dark', 
      darkText: 'dark:text-text-dark',
      inputBg: 'bg-gray-800 dark:bg-gray-700',
      inputBorder: 'border-gray-600 dark:border-gray-500'
    },
    blue: { 
      bg: 'bg-blue-50', 
      darkBg: 'dark:bg-blue-900', 
      text: 'text-blue-800', 
      darkText: 'dark:text-blue-100',
      inputBg: 'bg-blue-100 dark:bg-blue-800',
      inputBorder: 'border-blue-300 dark:border-blue-600'
    },
    green: { 
      bg: 'bg-green-50', 
      darkBg: 'dark:bg-green-900', 
      text: 'text-green-800', 
      darkText: 'dark:text-green-100',
      inputBg: 'bg-green-100 dark:bg-green-800',
      inputBorder: 'border-green-300 dark:border-green-600'
    }
  };

  return (
    <PortfolioContext.Provider value={{ portfolioData, setPortfolioData, themes }}>
      <div className={`${themes[portfolioData.theme].bg} ${themes[portfolioData.theme].darkBg} ${themes[portfolioData.theme].text} ${themes[portfolioData.theme].darkText} min-h-screen`}>
        <ThemeSwitcher />
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