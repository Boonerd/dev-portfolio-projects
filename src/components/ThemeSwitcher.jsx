import { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

function ThemeSwitcher() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDark(savedTheme === 'dark');
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark', !isDark);
    localStorage.setItem('theme', !isDark ? 'dark' : 'light');
  };

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
      <button
        onClick={toggleTheme}
        className={`p-2 rounded-full ${isDark ? 'bg-yellow-400 text-gray-800' : 'bg-gray-800 text-yellow-400'}`}
        aria-label="Toggle Theme"
      >
        {isDark ? <FaSun size={20} /> : <FaMoon size={20} />}
      </button>
    </div>
  );
}

export default ThemeSwitcher;