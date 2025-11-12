import { useContext, useEffect, useState } from 'react';
import { PortfolioContext } from '../App';
import { useNavigate } from 'react-router-dom';
import FormInput from '../components/FormInput';

function Form() {
  const { portfolioData, setPortfolioData, themes } = useContext(PortfolioContext);
  const navigate = useNavigate();
  const [newSkill, setNewSkill] = useState('');
  const [newProject, setNewProject] = useState({ title: '', description: '', github: '' });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const savedData = localStorage.getItem('portfolioData');
    if (savedData) setPortfolioData(JSON.parse(savedData));
  }, [setPortfolioData]);

  const handleChange = (e) => {
    setPortfolioData({ ...portfolioData, [e.target.name]: e.target.value });
  };

  const handleSocialChange = (e) => {
    setPortfolioData({
      ...portfolioData,
      social: { ...portfolioData.social, [e.target.name]: e.target.value },
    });
  };

  const addSkill = () => {
    if (newSkill.trim()) {
      setPortfolioData({ ...portfolioData, skills: [...portfolioData.skills, newSkill.trim()] });
      setNewSkill('');
    }
  };

  const removeSkill = (index) => {
    const updatedSkills = portfolioData.skills.filter((_, i) => i !== index);
    setPortfolioData({ ...portfolioData, skills: updatedSkills });
  };

  const addProject = () => {
    if (newProject.title.trim() && newProject.description.trim()) {
      setPortfolioData({ ...portfolioData, projects: [...portfolioData.projects, { ...newProject }] });
      setNewProject({ title: '', description: '', github: '' });
    }
  };

  const removeProject = (index) => {
    const updatedProjects = portfolioData.projects.filter((_, i) => i !== index);
    setPortfolioData({ ...portfolioData, projects: updatedProjects });
  };

  const validate = () => {
    const newErrors = {};
    if (!portfolioData.name.trim()) newErrors.name = 'Required';
    if (!portfolioData.bio.trim()) newErrors.bio = 'Required';
    if (portfolioData.skills.length === 0) newErrors.skills = 'Add at least one skill';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) {
      localStorage.setItem('portfolioData', JSON.stringify(portfolioData));
      navigate('/preview');
    }
  };

  const theme = themes[portfolioData.theme]; // Add this line to define theme

  return (
    <div className={`flex flex-col sm:flex-row min-h-screen p-4 ${theme.bg} ${theme.darkBg}`}>
      <div className="w-full md:w-1/2 p-4">
        <h2 className={`text-2xl font-bold mb-4 ${theme.text} ${theme.darkText}`}>Fill Out Your Details</h2>
        <FormInput label="Name" name="name" value={portfolioData.name} onChange={handleChange} error={errors.name} />
        <FormInput label="Bio" name="bio" value={portfolioData.bio} onChange={handleChange} textarea error={errors.bio} />
        
        <div className="mb-4">
          <label className={`block mb-2 ${theme.text} ${theme.darkText}`}>Skills {errors.skills && <span className="text-red-500">({errors.skills})</span>}</label>
          <div className="flex flex-col sm:flex-row">
            <input
              type="text"
              value={newSkill}
              onChange={(e) => setNewSkill(e.target.value)}
              className="border p-2 flex-grow rounded focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2 sm:mb-0 sm:mr-2"
              placeholder="e.g., React"
            />
            <button onClick={addSkill} className="bg-blue-500 text-white px-4 py-2 ml-2 rounded hover:bg-blue-600 transition duration-200 shadow-md hover:shadow-lg hover:scale-105">
              Add
            </button>
          </div>
          <ul className="mt-2">
            {portfolioData.skills.map((skill, i) => (
              <li key={i} className="flex justify-between">
                <span className={`${theme.text} ${theme.darkText}`}>{skill}</span>
                <button onClick={() => removeSkill(i)} className="text-red-500 hover:underline">Remove</button>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="mb-4">
          <label className={`block mb-2 ${theme.text} ${theme.darkText}`}>Projects</label>
          <FormInput
            label="Title"
            value={newProject.title}
            onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
          />
          <FormInput
            label="Description"
            value={newProject.description}
            onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
            textarea
          />
          <FormInput
            label="GitHub Link"
            value={newProject.github}
            onChange={(e) => setNewProject({ ...newProject, github: e.target.value })}
          />
          <button onClick={addProject} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200 shadow-md hover:shadow-lg hover:scale-105">
            Add Project
          </button>
          <ul className="mt-2">
            {portfolioData.projects.map((proj, i) => (
              <li key={i} className="border p-2 mb-2 rounded">
                <h3 className={`font-bold ${theme.text} ${theme.darkText}`}>{proj.title}</h3>
                <p className={`${theme.text} ${theme.darkText}`}>{proj.description}</p>
                <a href={proj.github} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">{proj.github}</a>
                <button onClick={() => removeProject(i)} className="text-red-500 hover:underline ml-4">Remove</button>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="mb-4">
          <label className={`block mb-2 ${theme.text} ${theme.darkText}`}>Social Links</label>
          <FormInput label="GitHub" name="github" value={portfolioData.social.github} onChange={handleSocialChange} />
          <FormInput label="LinkedIn" name="linkedin" value={portfolioData.social.linkedin} onChange={handleSocialChange} />
          <FormInput label="Twitter" name="twitter" value={portfolioData.social.twitter} onChange={handleSocialChange} />
        </div>
        
        <button onClick={handleSubmit} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-200 shadow-md hover:shadow-lg hover:scale-105">
          Generate Portfolio
        </button>
      </div>
    </div>
  );
}

export default Form;