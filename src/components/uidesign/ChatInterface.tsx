"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/uidesign/textArea";
import { ModelSelector } from "@/components/uidesign/ModelSelector";
import { TextCounter } from "./TextCounter";
import { useToast } from "@/components/uidesign/hooks/use-toast";


const MODELS = [
    { id: "chatgpt", name: "ChatGPT" },
    { id: "claude", name: "Claude" },
    { id: "llama", name: "Llama" },
    { id: "human", name: "Human" },
  ];

export const ChatInterface: React.FC = () => {
    const [text, setText] = useState("");
    const [selectedModel, setSelectedModel] = useState("chatgpt");
    const [charactersCount, setCharactersCount] = useState(0);
    const [wordsCount, setWordsCount] = useState(0);
    const { toast } = useToast();
  
    useEffect(() => {
      setCharactersCount(text.length);
      setWordsCount(text.trim() === "" ? 0 : text.trim().split(/\s+/).length);
    }, [text]);
  
    const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setText(e.target.value);
    };
  
    const handleModelSelect = (modelId: string) => {
      setSelectedModel(modelId);
    };
  
    const handleCheckForAI = () => {
      if (text.trim() === "") {
        toast({
          title: "Empty Text",
          description: "Please enter some text to check.",
          variant: "destructive",
        });
        return;
      }
      
      toast({
        title: "AI Check Initiated",
        description: "Checking text for AI-generated content...",
      });
      // In a real app, you would call an API here
    };
  
    const handleHumanize = () => {
      if (text.trim() === "") {
        toast({
          title: "Empty Text",
          description: "Please enter some text to humanize.",
          variant: "destructive",
        });
        return;
      }
      
      toast({
        title: "Humanizing Text",
        description: "Processing your text to make it more human-like...",
      });
      // In a real app, you would call an API here
    };
  
    return (
      <div className="flex flex-col justify-end mt-17 w-full max-w-3xl bg-white rounded-lg shadow-sm border p-6 m-4">
        <div className="mb-4">
          <ModelSelector
            models={MODELS}
            selectedModel={selectedModel}
            onModelSelect={handleModelSelect}
          />
        </div>
        
        <div className="mb-2">
          <Textarea
            placeholder="Enter your text here..."
            className="min-h-[200px] resize-none"
            value={text}
            onChange={handleTextChange}
          />
        </div>
        
        <TextCounter
          charactersCount={charactersCount}
          wordsCount={wordsCount}
        />
        
        <div className="flex justify-between mt-4">
          <Button
            variant="outline"
            className="bg-gray-100 hover:bg-gray-200"
            onClick={handleCheckForAI}
          >
            Check for AI
          </Button>
          <Button 
            variant="default" 
            className="bg-black text-white hover:bg-gray-800"
            onClick={handleHumanize}
          >
            Humanize
          </Button>
        </div>
      </div>
    );
  };