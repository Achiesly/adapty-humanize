

import React from "react";

interface TextCounterProps {
  charactersCount: number;
  wordsCount: number;
}

export const TextCounter: React.FC<TextCounterProps> = ({
  charactersCount,
  wordsCount,
}) => {
  return (
    <div className="text-sm text-muted-foreground mt-2">
      {charactersCount} characters | {wordsCount} words
    </div>
  );
};
