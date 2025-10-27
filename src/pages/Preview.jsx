import { useContext, useRef, useState } from 'react';
import { PortfolioContext } from '../App';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { ClipLoader } from 'react-spinners';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';

function Preview() {
  const { portfolioData, themes } = useContext(PortfolioContext);
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
      className={`min-h-screen p-4 ${themes[portfolioData.theme].bg} ${themes[portfolioData.theme].darkBg}`}
    >
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`text-3xl font-bold mb-4 ${themes[portfolioData.theme].text} ${themes[portfolioData.theme].darkText}`}
      >
        Portfolio Preview
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-6"
      >
        <h2 className={`text-2xl font-semibold ${themes[portfolioData.theme].text} ${themes[portfolioData.theme].darkText}`}>{portfolioData.name || 'Your Name'}</h2>
        <p className={`text-lg ${themes[portfolioData.theme].text} ${themes[portfolioData.theme].darkText}`}>{portfolioData.bio || 'Add your bio in the form!'}</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mb-6"
      >
        <h3 className={`text-xl font-medium ${themes[portfolioData.theme].text} ${themes[portfolioData.theme].darkText}`}>Skills</h3>
        <ul className="list-disc list-inside">
          {portfolioData.skills.map((skill, i) => (
            <li key={i} className={themes[portfolioData.theme].text + ' ' + themes[portfolioData.theme].darkText}>{skill}</li>
          ))}
        </ul>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mb-6"
      >
        <h3 className={`text-xl font-medium ${themes[portfolioData.theme].text} ${themes[portfolioData.theme].darkText}`}>Projects</h3>
        {portfolioData.projects.map((proj, i) => (
          <div key={i} className="mb-2 flex flex-col sm:flex-row">
            <div className="flex-1">
              <h4 className={`font-semibold ${themes[portfolioData.theme].text} ${themes[portfolioData.theme].darkText}`}>{proj.title}</h4>
              <p className={themes[portfolioData.theme].text + ' ' + themes[portfolioData.theme].darkText}>{proj.description}</p>
            </div>
            <a href={proj.github} className="text-blue-500 hover:underline mt-2 sm:mt-0 sm:ml-4">GitHub</a>
          </div>
        ))}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="mb-6"
      >
        <h3 className={`text-xl font-medium ${themes[portfolioData.theme].text} ${themes[portfolioData.theme].darkText}`}>Social</h3>
        <p>GitHub: <FaGithub className="inline mr-1" /> {portfolioData.social.github}</p>
        <p>LinkedIn: <FaLinkedin className="inline mr-1" /> {portfolioData.social.linkedin}</p>
        <p>Twitter: <FaTwitter className="inline mr-1" /> {portfolioData.social.twitter}</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.2 }}
        className="mt-6"
      >
        <h3 className={`text-xl font-medium ${themes[portfolioData.theme].text} ${themes[portfolioData.theme].darkText}`}>Contact Me</h3>
        <form action="https://formspree.io/f/myzbkydp" method="POST">
          <input type="text" name="name" placeholder="Your Name" className="border p-2 w-full mb-2 rounded" />
          <input type="email" name="email" placeholder="Your Email" className="border p-2 w-full mb-2 rounded" />
          <textarea name="message" placeholder="Your Message" className="border p-2 w-full mb-2 rounded" rows="4"></textarea>
          <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-200 shadow-md hover:shadow-lg hover:scale-105">
            Send
          </button>
        </form>
      </motion.div>
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        onClick={handleExport}
        className="mt-6 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-200 shadow-md hover:shadow-lg hover:scale-105"
        disabled={isExporting}
      >
        {isExporting ? <ClipLoader size={20} color="#ffffff" /> : 'Export as PDF & PNG'}
      </motion.button>
    </motion.div>
  );
}

export default Preview;