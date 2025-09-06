import { useEffect, useState } from 'react';
import { getDocument,GlobalWorkerOptions } from 'pdfjs-dist';
GlobalWorkerOptions.workerSrc = `/pdf.worker.js`;

const PDFThumbnail = ({ pdfUrl }) => {
  const [thumbnail, setThumbnail] = useState(null);

  useEffect(() => {
    const renderThumbnail = async () => {
      const loadingTask = getDocument(pdfUrl);
      const pdf = await loadingTask.promise;
      const page = await pdf.getPage(1);

      const scale = 1.5;
      const viewport = page.getViewport({ scale });

      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      canvas.height = viewport.height;
      canvas.width = viewport.width;

      const renderContext = {
        canvasContext: context,
        viewport,
      };

      await page.render(renderContext).promise;

      const dataUrl = canvas.toDataURL();
      setThumbnail(dataUrl);
    };

    renderThumbnail();
  }, [pdfUrl]);

  return (
    thumbnail ? <img style={{    height: '560',
      width: '100%'}} src={thumbnail} alt="PDF Thumbnail" /> : <p>Loading...</p>
  );
};

export default PDFThumbnail;
