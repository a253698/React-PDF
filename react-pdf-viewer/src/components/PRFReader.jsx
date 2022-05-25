import React, { useState } from "react";
import Loader from "./Loader";
import { Document, Page, pdfjs } from "react-pdf";
import ControlPanel from "./ControlPanel";
import ICUReport1 from "../assets/ICU-NursingShiftSyetemReport-1.pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PDFReader = () => {
  const [scale, setScale] = useState(1.0);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setIsLoading(false);
    <Loader isLoading={isLoading} />;
  }

  return (
    <div>
      <section
        id="pdf-section"
        className="flex flex-col items-center w-100 bg-[#03010E]"
      >
        <ControlPanel
          scale={scale}
          setScale={setScale}
          numPages={numPages}
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
          file={ICUReport1}
        />
        <Document file={ICUReport1} onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} scale={scale} />
        </Document>
      </section>
    </div>
  );
};

export default PDFReader;
