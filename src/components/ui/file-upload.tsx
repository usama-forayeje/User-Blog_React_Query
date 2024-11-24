import React, { useState } from "react";
import { CloudUpload, Paperclip } from "lucide-react";

 function FileUploader({ value, onValueChange, dropzoneOptions, className }) {
  const [files, setFiles] = useState(value || []);

  const handleFileChange = (event) => {
    const selectedFiles = Array.from(event.target.files);
    setFiles(selectedFiles);
    if (onValueChange) onValueChange(selectedFiles);
  };

  return (
    <div className={`border-dashed border-2 p-4 rounded-md ${className}`}>
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
export {FileUploader}