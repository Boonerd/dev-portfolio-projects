function PortfolioPreview({ data }) {
  let bgClass = 'bg-primary-light text-text-light';
  if (data.theme === 'dark') bgClass = 'bg-primary-dark text-text-dark';
  else if (data.theme === 'blue') bgClass = 'bg-primary-blue text-text-blue';
  else if (data.theme === 'red') bgClass = 'bg-primary-red text-text-red';

  return (
    <div id="preview-container" className={`p-8 rounded-lg shadow-lg w-full max-w-4xl ${bgClass}`}>
      <h1 className="text-3xl font-bold mb-2">{data.name || 'Your Name'}</h1>
      <p className="mb-6">{data.bio || 'Your bio here...'}</p>
      <h2 className="text-xl font-semibold mb-2">Skills</h2>
      <ul className="list-disc pl-6 mb-6">
        {data.skills.map((s, i) => <li key={i}>{s}</li>)}
      </ul>
      <h2 className="text-xl font-semibold mb-2">Projects</h2>
      {data.projects.map((p, i) => (
        <div key={i} className="mb-4 border-b pb-4">
          <h3 className="font-bold text-lg">{p.title}</h3>
          <p className="my-1">{p.description}</p>
          <a href={p.github} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">GitHub Link</a>
        </div>
      ))}
      <h2 className="text-xl font-semibold mb-2">Social Links</h2>
      <ul className="space-y-1">
        {data.social.github && <li><a href={data.social.github} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">GitHub</a></li>}
        {data.social.linkedin && <li><a href={data.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">LinkedIn</a></li>}
        {data.social.twitter && <li><a href={data.social.twitter} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Twitter</a></li>}
      </ul>
    </div>
  );
}

export default PortfolioPreview;