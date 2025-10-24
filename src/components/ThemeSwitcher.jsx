import { useContext } from 'react';
import { PortfolioContext } from '../App';

function ThemeSwitcher() {
  const { portfolioData, setPortfolioData } = useContext(PortfolioContext);

  const themes = ['light', 'dark', 'blue', 'red'];

  const changeTheme = (newTheme) => {
    setPortfolioData({ ...portfolioData, theme: newTheme });
    document.documentElement.classList.remove('dark', 'blue', 'red'); // Custom classes for palettes
    if (newTheme === 'dark') document.documentElement.classList.add('dark');
    else if (newTheme !== 'light') document.documentElement.classList.add(newTheme);
  };

  return (
    <div className="flex space-x-2">
      {themes.map((th) => (
        <button
          key={th}
          onClick={() => changeTheme(th)}
          className={`px-4 py-2 rounded capitalize ${portfolioData.theme === th ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
        >
          {th}
        </button>
      ))}
    </div>
  );
}

export default ThemeSwitcher;