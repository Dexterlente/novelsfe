import React, { useState } from "react";
import DOMPurify from "dompurify";

interface Props {
  text: string;
  maxLength: number;
}

function CollapsibleText({ text, maxLength }: Props) {
  const [expanded, setExpanded] = useState(false);

  const sanitizedText = DOMPurify.sanitize(text);

  const displayedText = expanded
    ? sanitizedText
    : sanitizedText.slice(0, maxLength);

  return (
    <div>
      <div
        dangerouslySetInnerHTML={{
          __html: displayedText,
        }}
      ></div>
      {sanitizedText.length > maxLength && (
        <button className="font-bold" onClick={() => setExpanded(!expanded)}>
          {expanded ? "See less" : "See more"}
        </button>
      )}
    </div>
  );
}

export default CollapsibleText;
