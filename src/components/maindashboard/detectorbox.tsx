"use client"
import React, { useEffect, useState } from "react";
import { Upload, Sparkles, Clipboard, Trash2, RefreshCw, Copy } from "lucide-react"; // icons
import { cva } from "class-variance-authority"; // class variance authority for styling

//const container1 = cva("rounded-lg max-w-7xl mx-auto mt-1 mb-20 flex flex-col items-center justify-center p-10 relative bg-white");
//const container2 = cva("rounded-lg max-w-6xl mx-auto mt-1 mb-20 flex items-center justify-center p-10 relative bg-white grid grid-cols-2 gap-4");
// const button = cva("bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded")
const heading = cva("text-5xl font-bold text-white bg-clip-text text-transparent leading-tight items-center text-center mt-12");
// const button1 = cva("bg-blue-600 text-white px-6 mt-2 py-3 hover:bg-blue-700 rounded transition-transform cursor-pointer");
// const button2 = cva("bg-blue-600 text-white px-6 mt-2 py-3 hover:bg-blue-700 rounded transition-transform cursor-pointer");
//const description = cva("text-xl leading-relaxed font-regular mt-3.5 text-gray-600 mb-4 justify-center my-4");
// const buttonStyle = cva("bg-blue-600 text-white px-6 mt-2 py-3 hover:bg-blue-700 rounded transition-transform cursor-pointer");

export default function Detectorbox(){
  const [textareaValue, setTextareaValue] = useState("");
  const [uploadedFilePath, setUploadedFilePath] = useState(""); // State for uploaded file path
  const [textaresPlaceholder, setTextareaPlaceholder] = useState("Enter text here or upload file to check for AI Content.");
  useEffect(() => {
    // This code runs only in the browser
    const textarea = document.querySelector("textarea");
    if (textarea) {
      setTextareaValue(textarea.value.trim());
    }
  }, []);



  return (
            <div className="min-h-screen text-white shadow-2xl mb-20 bg-[rgb(0,31,101)]">
              
                  <header>
                  <h2 className={`${heading()} font-bold text-4lg`}>
                  <span className="block text-center">AI Detector</span>
                  <span className="block text-center"></span>
                  </h2>
                  
                    <p className="mt-4 text-center text-white-50 text-lg">
                    Evaluate text authenticity with precision, detect AI-generated content instantly and reliably.
                    </p>
                    </header>

                    

                    <div className="flex flex-col items-center justify-center w-full max-w-7xl mx-auto mt-16 p-6 bg-white-400 rounded-xl mb-10">
                      <div className="grid grid-cols-2 w-full divide-x-1 divide-gray-700">
                      <div className="w-full min-h-[500px] bg-white rounded-l-xl p-8 flex flex-col">
                        <textarea 
                        className="w-full min-h-[200px] max-h-[400px] bg-transparent text-black text-lg resize-none focus:outline-none placeholder:text-black"
                        placeholder="Paste your AI-generated content here"
                        onChange={(e) => {
                          setTextareaValue(e.target.value.trim());
                          e.target.style.height = 'auto';
                          e.target.style.cssText += '; scrollbar-width: 1px; -webkit-scrollbar-width: 1px;';
                          e.target.style.height = Math.min(400, Math.max(200, e.target.scrollHeight)) + 'px';
                        }}
                        style={{
                          lineHeight: "1.5",
                          fontSize: "16px", 
                          fontWeight: "400",
                          font: "regular",
                          fontFamily: "'Inter', sans-serif",
                          letterSpacing: "0.01px"
                        }}
                        />
                        <div className="flex items-center justify-center gap-6 mt-6" id="action-buttons"></div>
          <div className="flex items-center justify-center gap-6 mt-6" id="action-buttons">
            <button className="flex items-center gap-2 px-4 py-2 bg-[#2B2B2B] hover:bg-[#333333] rounded-md text-gray-400 text-sm relative">
              <Upload size={16} />
              Upload File
              <input
                type="file"
                accept=".txt,.doc,.docx,.md,.pdf"
                className="absolute inset-0 opacity-0 cursor-pointer"
                onChange={(e) => {
                  if (e.target.files && e.target.files.length > 0) {
                    const file = e.target.files[0];
                    const reader = new FileReader();
                    
                    reader.onload = (event) => {
                      const fileContent = event.target?.result as string;
                      const textarea = document.querySelector("textarea");
                      if (textarea) {
                        textarea.value = fileContent;
                        textarea.style.height = 'auto';
                        textarea.style.height = Math.min(400, Math.max(200, textarea.scrollHeight)) + 'px';
                        setTextareaValue(fileContent);
                        setTextareaPlaceholder("");
                        
                        // Hide action buttons
                        const actionButtons = document.getElementById("action-buttons");
                        if (actionButtons) actionButtons.style.display = "none";
                        // Show delete button container
                        const deleteContainer = document.getElementById("delete-container");
                        if (deleteContainer) deleteContainer.style.display = "flex";
                      }
                    };

                    reader.readAsText(file);
                  }
                }}
              />
            </button>
            <button 
              className="flex items-center gap-2 px-4 py-2 bg-[#2B2B2B] hover:bg-[#333333] rounded-md text-gray-400 text-sm cursor-pointer"
              onClick={() => {
                const sampleText =
                  "As the Patient Safety Officer at a regional hospital serving a diverse patient population, I lead the interdisciplinary effort to reduce inpatient falls, a persistent challenge affecting patient outcomes and quality metrics. Our team includes nurses, physical therapists, physicians, environmental services, and patient advocates. The hospital comprises a surgical unit, a geriatric ward, rehabilitation services, and a high-turnover medical floor each with unique fall risk profiles. We recently implemented a hospital-wide fall prevention strategy that includes standardized risk assessments, hourly rounding protocols, non-slip flooring, patient education, and post-fall huddles.";
                const textarea = document.querySelector("textarea");
                if (textarea) {
                  textarea.value = sampleText;
                  textarea.style.height = 'auto';
                  textarea.style.height = Math.min(400, Math.max(200, textarea.scrollHeight)) + 'px';
                  setTextareaValue(sampleText);
                  // Hide action buttons
                  const actionButtons = document.getElementById("action-buttons");
                  if (actionButtons) actionButtons.style.display = "none";
                  // Show delete button container  
                  const deleteContainer = document.getElementById("delete-container");
                  if (deleteContainer) deleteContainer.style.display = "flex";
                }
              }}
            >
              <Sparkles size={16} />
              Try A Sample
            </button>

            <button 
              className="flex items-center gap-2 px-4 py-2 bg-[#2B2B2B] hover:bg-[#333333] rounded-md text-gray-400 text-sm cursor-pointer"
              onClick={() => {
                navigator.clipboard
                  .readText()
                  .then((text) => {
                    console.log("Pasted text:", text);
                    const textarea = document.querySelector("textarea");
                    if (textarea) {
                      textarea.value = text;
                      textarea.style.height = 'auto';
                      textarea.style.height = Math.min(400, Math.max(200, textarea.scrollHeight)) + 'px';
                      setTextareaValue(text);
                      // Hide action buttons
                      const actionButtons = document.getElementById("action-buttons");
                      if (actionButtons) actionButtons.style.display = "none";
                      // Show delete button container
                      const deleteContainer = document.getElementById("delete-container");
                      if (deleteContainer) deleteContainer.style.display = "flex";
                    }
                  })
                  .catch((err) => {
                    console.error("Failed to read clipboard contents: ", err);
                  });
              }}
            >
              <Clipboard size={16} />
              Paste Text
            </button>
          </div>
          <div id="delete-container" className="flex items-center justify-end gap-2 mt-10" style={{display: "none"}}>
            <button 
              onClick={() => {
                // Clear the textarea content
                const textarea = document.querySelector('textarea');
                if (textarea) {
                  textarea.value = '';
                  textarea.style.height = '300px';
                  setTextareaValue('');
                  // Show action buttons
                  const actionButtons = document.getElementById("action-buttons");
                  if (actionButtons) actionButtons.style.display = "flex";
                  // Hide delete button container
                  const deleteContainer = document.getElementById("delete-container");
                  if (deleteContainer) deleteContainer.style.display = "none";
                }
              }}
              className="flex items-center gap-2 px-3 py-2 bg-[#2B2B2B] hover:bg-[#333333] rounded-md text-gray-200 text-sm cursor-pointer"
            >
              <Trash2 size={16} />
            </button>
            <button 
              className="px-3 py-2 bg-[#2B2B2B] hover:bg-[#333333] rounded-md text-gray-200 text-sm cursor-pointer"
              onClick={() => {
                const textarea = document.querySelector('textarea');
                if (textarea && textarea.value) {
                  // Here you would typically make an API call to check for AI content
                  // For now, let's just log the content that would be checked
                  console.log("Checking for AI content:", textarea.value);
                  // You can add your AI detection logic here
                  // For example:
                  // checkForAIContent(textarea.value).then(result => {
                  //   // Handle the result
                  // });
                }
              }}
            >
              Check for AI
            </button>
            <button className="px-3 py-2 bg-blue-600 text-white hover:bg-blue-700 cursor-pointer transision-transform text-sm rounded-md cursor-pointer font-semibold">
              Humanize
            </button>
          </div>
        </div>




        <div className="w-full min-h-[500px] bg-white rounded-r-xl p-8">
          <div className="flex flex-col">
            <textarea
              readOnly
              className="w-full min-h-[300px] max-h-[450px] bg-transparent text-gray-200 resize-none focus:outline-none text-black placeholder:text-black"
              placeholder="Humanized text will appear here..."
              style={{
                  lineHeight: "1.5", 
                  fontSize: "16px",
                  fontWeight: "400",
                  font: "regular", 
                  fontFamily: "'Inter', sans-serif",
                  letterSpacing: "0.01px"
                  
              }}
            />
            <div className="flex gap-2 mt-30 justify-end">
              <button 
                className="p-2 bg-[#2B2B2B] hover:bg-[#333333] rounded-md text-gray-400 relative group cursor-pointer"
                onClick={() => {
                  const textToHumanize = document.querySelector('textarea');
                  const humanizedTextarea = document.querySelector('textarea[readonly]');
                  if (textToHumanize && textToHumanize.value) {
                    // Re-run the humanization process with the original text
                    // This assumes you have a function to handle the humanization
                    handleHumanizeText(textToHumanize.value);
                  }
                }}
              >
                <RefreshCw size={16} />
                <span className="invisible group-hover:visible absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded cursor-pointer">
                  Retry
                </span>
              </button>
              <button 
                className="p-2 bg-blue-600 text-white hover:bg-blue-700 cursor-pointer transision-transform text-sm rounded-md text-gray-400 relative group"
                onClick={() => {
                  const textToHumanize = document.querySelector('textarea');
                  const humanizedTextarea = document.querySelector('textarea[readonly]');
                  if (textToHumanize && humanizedTextarea && humanizedTextarea.value) {
                    navigator.clipboard.writeText(humanizedTextarea.value)
                      .then(() => {
                        const button = document.querySelector('.copy-button');
                        if (button) {
                          button.textContent = 'Copied!';
                          setTimeout(() => {
                            button.textContent = 'Copy';
                          }, 2000);
                        }
                      })
                      .catch(err => {
                        console.error('Failed to copy humanized content: ', err);
                      });
                  }
                }}
              >
                <Copy size={16} />
                <span className="copy-button invisible group-hover:visible absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white text-xs px-2 py-1 rounded cursor-pointer">
                  Copy
                </span>
              </button>
            </div>
          </div>
        </div>

        
      </div>
    </div>

    





    

    </div>
  );
};

