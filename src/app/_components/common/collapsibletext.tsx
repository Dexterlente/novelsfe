import React, { useState } from "react";

interface Props {
  text: string;
  maxLength: number;
}

function CollapsibleText({ text, maxLength }: Props) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <p>{expanded ? text : text?.slice(0, maxLength)}</p>
      {text?.length > maxLength && (
        <button className="font-bold" onClick={() => setExpanded(!expanded)}>
          {expanded ? "See less" : "See more"}
        </button>
      )}
    </div>
  );
}

export default CollapsibleText;
