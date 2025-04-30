
import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ModelOption {
  id: string;
  name: string;
}

interface ModelSelectorProps {
  models: ModelOption[];
  selectedModel: string;
  onModelSelect: (modelId: string) => void;
}

export const ModelSelector: React.FC<ModelSelectorProps> = ({
  models,
  selectedModel,
  onModelSelect,
}) => {
  return (
    <div className="flex flex-wrap gap-2">
      {models.map((model) => (
        <Button
          key={model.id}
          variant="outline"
          size="sm"
          onClick={() => onModelSelect(model.id)}
          className={cn(
            "rounded-full font-normal",
            selectedModel === model.id
              ? "bg-primary text-primary-foreground"
              : "bg-background"
          )}
        >
          {model.name}
        </Button>
      ))}
    </div>
  );
};
