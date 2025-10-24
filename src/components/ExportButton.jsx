import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

function ExportButton() {
  const handleExport = async (type) => {
    const preview = document.getElementById('preview-container'); // Add id to PortfolioPreview div
    const canvas = await html2canvas(preview);
    if (type === 'png') {
      const link = document.createElement('a');
      link.download = 'portfolio.png';
      link.href = canvas.toDataURL();
      link.click();
    } else if (type === 'pdf') {
      const pdf = new jsPDF();
      pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0);
      pdf.save('portfolio.pdf');
    }
  };

  return (
    <div>
      <button onClick={() => handleExport('png')} className="bg-blue-500 text-white px-4 py-2 rounded mr-2">Download PNG</button>
      <button onClick={() => handleExport('pdf')} className="bg-blue-500 text-white px-4 py-2 rounded">Download PDF</button>
    </div>
  );
}

export default ExportButton;