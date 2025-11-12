import { useContext } from 'react';
import { PortfolioContext } from '../App';

function ThemeSwitcher() {
  const { portfolioData, setPortfolioData, themes } = useContext(PortfolioContext);

  const toggleTheme = () => {
    const current = portfolioData.theme;
    const next = current === 'light' ? 'dark' : current === 'dark' ? 'blue' : current === 'blue' ? 'green' : 'light';
    setPortfolioData({ ...portfolioData, theme: next });
  };

  return (
    <button onClick={toggleTheme} className="p-2 bg-gray-200 dark:bg-gray-700 rounded">
      Switch Theme ({portfolioData.theme})
    </button>
  );
}

export default ThemeSwitcher;