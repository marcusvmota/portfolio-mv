// components/DownloadButton.js
"use client"; // Indica que este é um componente cliente

import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

const DownloadButton = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "../assets/curriculo.pdf";
    link.download = "curriculo"; // Nome do arquivo para download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Button
      variant='outline'
      size='lg'
      className='uppercase flex items-center gap-2'
      onClick={handleDownload}
    >
      <FiDownload className='text-xl' /> Download CV
    </Button>
  );
};

export default DownloadButton;
