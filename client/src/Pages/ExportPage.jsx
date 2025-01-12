import React, { useRef, useState } from 'react';
import { usePDF } from 'react-to-pdf';

const ExportPage = () => {
  const targetRef = useRef();
  const [pdfUrl, setPdfUrl] = useState(null);
  const { toPDF, targetRef: pdfTargetRef } = usePDF({filename: 'portfolio.pdf'});

  const handleExport = async () => {
    const pdfBlob = await toPDF();
    const url = URL.createObjectURL(pdfBlob);
    setPdfUrl(url);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Export Your Portfolio</h1>
      
      <div className="mb-6">
        <button
          onClick={handleExport}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Generate PDF
        </button>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Preview</h2>
        <div 
          ref={targetRef} 
          className="border-2 border-gray-300 p-4 h-64 overflow-auto"
        >
          {/* This is where you'd render your actual portfolio content */}
          <h3 className="text-lg font-bold">Your Portfolio</h3>
          <p>This is a preview of your portfolio content.</p>
          {/* Add more portfolio content here */}
        </div>
      </div>

      {pdfUrl && (
        <div>
          <h2 className="text-xl font-semibold mb-2">Download</h2>
          <a
            href={pdfUrl}
            download="portfolio.pdf"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded inline-block"
          >
            Download PDF
          </a>
        </div>
      )}
    </div>
  );
};

export default ExportPage;

