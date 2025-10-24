import { Link } from 'react-router-dom';
import ThemeSwitcher from '../components/ThemeSwitcher';
import { motion } from 'framer-motion';

function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center min-h-screen p-4 bg-primary-light dark:bg-primary-dark text-text-light dark:text-text-dark"
    >
      <h1 className="text-4xl font-bold mb-4">Welcome to DevPath</h1>
      <p className="text-lg mb-8">Build your developer portfolio in minutes!</p>
      <Link to="/form">
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600"
        >
          Start Building
        </motion.button>
      </Link>
      <div className="mt-8">
        <ThemeSwitcher />
      </div>
    </motion.div>
  );
}

export default Home;