import { CloudUpload, Paperclip } from "lucide-react";
import { useState } from "react";

function FileUploader({ value, onValueChange, dropzoneOptions, className }) {
    const [files, setFiles] = useState(value || []);
  
    const handleFileChange = (event) => {
      const selectedFiles = Array.from(event.target.files);
      setFiles(selectedFiles);
      if (onValueChange) onValueChange(selectedFiles);
    };
  
    const handleDrop = (event) => {
      event.preventDefault();
      const droppedFiles = Array.from(event.dataTransfer.files);
      setFiles([...files, ...droppedFiles]);
      if (onValueChange) onValueChange([...files, ...droppedFiles]);
    };
  
    const handleDragOver = (event) => {
      event.preventDefault();
    };
  
    return (
      <div
        className={`border-dashed border-2 p-4 rounded-md ${className}`}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <label htmlFor="file-input" className="cursor-pointer flex flex-col items-center">
          <CloudUpload className="text-gray-500 w-10 h-10" />
          <p className="text-sm text-gray-500">Click to upload or drag and drop files</p>
        </label>
        <input
          id="file-input"
          type="file"
          multiple={dropzoneOptions?.multiple}
          onChange={handleFileChange}
          className="hidden"
        />
        <div className="mt-2 space-y-1">
          {files.map((file, index) => (
            <div key={index} className="flex items-center">
              <Paperclip className="w-4 h-4 mr-2" />
              <span>{file.name}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  function FileUploaderContent({ children }) {
    return <div className="mt-4">{children}</div>;
  }
  
  function FileUploaderItem({ children }) {
    return (
      <div className="flex items-center space-x-2">
        {children}
      </div>
    );
  }
  
  export { FileUploader, FileUploaderContent, FileUploaderItem };
  