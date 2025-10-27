import { useContext, useRef, useState } from 'react';
import { PortfolioContext } from '../App';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { ClipLoader } from 'react-spinners';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';

function Preview() {
  const { portfolioData } = useContext(PortfolioContext);
  const previewRef = useRef();
  const [isExporting, setIsExporting] = useState(false);

  const handleExport = () => {
    setIsExporting(true);
    html2canvas(previewRef.current, { scale: 2 }).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('portfolio.pdf');

      const link = document.createElement('a');
      link.download = 'portfolio.png';
      link.href = imgData;
      link.click();
      setIsExporting(false);
    });
  };

  return (
    <motion.div
      ref={previewRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen p-4 bg-primary-light dark:bg-primary-dark text-text-light dark:text-text-dark"
    >
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold mb-4"
      >
        Portfolio Preview
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-6"
      >
        <h2 className="text-2xl font-semibold">{portfolioData.name || 'Your Name'}</h2>
        <p className="text-lg">{portfolioData.bio || 'Add your bio in the form!'}</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mb-6"
      >
        <h3 className="text-xl font-medium">Skills</h3>
        <ul className="list-disc list-inside">
          {portfolioData.skills.map((skill, i) => (
            <li key={i}>{skill}</li>
          ))}
        </ul>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mb-6"
      >
        <h3 className="text-xl font-medium">Projects</h3>
        {portfolioData.projects.map((proj, i) => (
          <div key={i} className="mb-2">
            <h4 className="font-semibold">{proj.title}</h4>
            <p>{proj.description}</p>
            <a href={proj.github} className="text-blue-500 hover:underline">GitHub</a>
          </div>
        ))}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="mb-6"
      >
        <h3 className="text-xl font-medium">Social</h3>
        <p>GitHub: <FaGithub className="inline mr-1" /> {portfolioData.social.github}</p>
        <p>LinkedIn: <FaLinkedin className="inline mr-1" /> {portfolioData.social.linkedin}</p>
        <p>Twitter: <FaTwitter className="inline mr-1" /> {portfolioData.social.twitter}</p>
      </motion.div>
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        onClick={handleExport}
        className="mt-6 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
        disabled={isExporting}
      >
        {isExporting ? <ClipLoader size={20} color="#ffffff" /> : 'Export as PDF & PNG'}
      </motion.button>
    </motion.div>
  );
}

export default Preview;