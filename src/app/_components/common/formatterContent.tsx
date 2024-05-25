import React from "react";

interface FormattedTextProps {
  text: string;
}

const FormattedText: React.FC<FormattedTextProps> = ({ text }) => {
  // Split text into paragraphs using double newlines
  const paragraphs = text?.split("\n\n");

  return (
    <div>
      {paragraphs?.map((paragraph, index) => (
        <p
          key={index}
          style={{ marginBottom: "1.5em", whiteSpace: "pre-line" }}
        >
          {paragraph}
        </p>
      ))}
    </div>
  );
};

export default FormattedText;
