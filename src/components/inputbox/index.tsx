"use client"
import { useEffect, useState } from "react";
import { cva } from "class-variance-authority"
import { Button } from "../ui/button"
import { RiDeleteBin6Line } from "react-icons/ri";
import { HiOutlineUpload } from "react-icons/hi";
import { MdContentPaste } from "react-icons/md";
import { GoFile } from "react-icons/go";


const container1 = cva("rounded-lg max-w-7xl mx-auto mt-1 mb-20 flex flex-col items-center justify-center p-10 relative bg-white");
const heading = cva("text-5xl font-bold text-gray-700 leading-tight items-center text-center mt-1");
const description = cva("text-xl leading-relaxed font-regular mt-3.5 text-gray-600 mb-4 justify-center my-4");


  

export default function Inputbox() {
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
      <section>

        <div className={container1()}>
                  <div>
                  <h2 className={`${heading()} text-gray-800 font-bold text-4lg`}>
                  <span className="block text-center">Free AI Checker for Fast and</span>
                  <span className="block text-center">Accurate Detection</span>
                  </h2>
                  </div>
                        <p className={description()}>
                       Check your content&apos;s AI probability and get instant detection results.
                        </p>
            <div className="w-full max-w-6xl bg-white rounded-lg p-15 relative mt-4 border border-gray-300 shadow-md">
              {/* Textarea */}
              <textarea
                className="w-full h-88 p-4 text-gray-800 font-semibold bg-gray-50 shadow-md rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 resize-none leading-relaxed border"
                placeholder="Enter text here or upload file to check for AI Content."
                onChange={(e) => setTextareaValue(e.target.value.trim())}
                style={{
                  lineHeight: "1.5",
                  fontSize: "16px",
                  fontWeight: "400",
                  backgroundColor: "#ffffff",
                  font: "regular",
                  fontFamily: "'Inter', sans-serif",
                  color: "#000",
                  letterSpacing: "0.01px",
                }}
              ></textarea>

              {/* Buttons */}
              <div className="flex justify-center space-x-4 mt-4 mb-10">
                <Button
                  className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-300 flex items-center cursor-pointer"
                  onClick={() => {
                  navigator.clipboard
                    .readText()
                    .then((text) => {
                    console.log("Pasted text:", text);
                    const textarea = document.querySelector("textarea");
                    if (textarea) {
                      textarea.value = text; // Update textarea value directly
                      setTextareaValue(text); // Update state with pasted text
                      const deleteButton = document.querySelector("#delete-button");
                      if (deleteButton) (deleteButton as HTMLElement).style.display = "flex";
                    }
                    })
                    .catch((err) => {
                    console.error("Failed to read clipboard contents: ", err);
                    });
                  }}
                >
                  <MdContentPaste className="cursor-pointer" />
                  Paste Text
                </Button>
                <Button
                  className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-300 flex items-center cursor-pointer"
                  onClick={() => {
                    const sampleText =
                      "As the Patient Safety Officer at a regional hospital serving a diverse patient population, I lead the interdisciplinary effort to reduce inpatient falls, a persistent challenge affecting patient outcomes and quality metrics. Our team includes nurses, physical therapists, physicians, environmental services, and patient advocates. The hospital comprises a surgical unit, a geriatric ward, rehabilitation services, and a high-turnover medical floor each with unique fall risk profiles. We recently implemented a hospital-wide fall prevention strategy that includes standardized risk assessments, hourly rounding protocols, non-slip flooring, patient education, and post-fall huddles.";
                    const textarea = document.querySelector("textarea");
                    if (textarea) {
                      textarea.value = sampleText;
                      const deleteButton = document.querySelector("#delete-button");
                      if (deleteButton) (deleteButton as HTMLElement).style.display = "flex";
                    }
                  }}
                >
                  <GoFile className="cursor-pointer" />
                  Sample Text
                </Button>
                <Button
                  className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-300 flex items-center cursor-pointer relative"
                >
                  <HiOutlineUpload className="size-20px cursor-pointer" />
                  Upload File
                  <input
                  type="file"
                  accept=".txt,.doc,.docx,.md,.pdf"
                  className="absolute inset-0 opacity-0 cursor-pointer"
                  onChange={(e) => {
                    if (e.target.files && e.target.files.length > 0) {
                    const file = e.target.files[0];
                    const formData = new FormData();
                    formData.append("file", file);

                    // Send file to the server
                    fetch("http://localhost:5000/upload", {
                      method: "POST",
                      body: formData,
                    })
                      .then((response) => response.json())
                      .then((data) => {
                      console.log("File uploaded successfully:", data);

                      // Display the uploaded file content in the textarea
                      fetch(`http://localhost:5000${data.filePath}`)
                        .then((response) => response.text())
                        .then((fileContent) => {
                        const textarea = document.querySelector("textarea");
                        if (textarea) {
                          textarea.value = fileContent;
                          setTextareaValue(fileContent); // Update state with file content
                          setTextareaPlaceholder(""); // Clear placeholder when file is uploaded

                          // Show delete button
                          const deleteButton = document.querySelector("#delete-button");
                          if (deleteButton) (deleteButton as HTMLElement).style.display = "flex";
                        }
                        })
                        .catch((error) => {
                        console.error("Error fetching file content:", error);
                        });
                      })
                      .catch((error) => {
                      console.error("Error uploading file:", error);
                      });

                    // Display file name
                    const fileNameDisplay = document.createElement("div");
                    fileNameDisplay.className = "flex items-center text-gray-800 text-sm mt-2";
                    fileNameDisplay.innerHTML = `
                      <span class="mr-2 text-lg"><span class="icon"><FaRegFile /></span></span>
                      <span>${file.name}</span>
                    `;

                    const parentContainer = document.querySelector(".w-full.max-w-6xl");
                    if (parentContainer) {
                      parentContainer.appendChild(fileNameDisplay);
                    }
                    }
                  }}
                  />
                </Button>
                <div
                  id="document-container"
                  className="mt-4 p-4 bg-gray-100 rounded-lg shadow-md"
                  style={{ display: "none" }}
                ></div>
                <Button
                  id="delete-button"
                  className="text-gray-800 px-6 py-3 flex items-center cursor-pointer bg-white rounded-lg hover:bg-gray-300"
                  style={{ display: "none" }}
                  onClick={() => {
                    console.log("Delete action triggered");
                    const textarea = document.querySelector("textarea");
                    if (textarea) textarea.value = "";
                    const deleteButton = document.querySelector("#delete-button");
                    if (deleteButton) (deleteButton as HTMLElement).style.display = "none";
                    setUploadedFilePath(""); // Clear the uploaded file path
                  }}
                >
                  <RiDeleteBin6Line className="cursor-pointer" />
                </Button>
                <Button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 cursor-pointer">
                  Check for AI
                </Button>
              </div>
            </div>
            </div>

        </section>
    );
  }

























