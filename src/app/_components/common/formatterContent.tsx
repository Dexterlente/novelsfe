import React from "react";
import DOMPurify from "dompurify";

interface FormattedTextProps {
  text: string;
}

const FormattedText: React.FC<FormattedTextProps> = ({ text }) => {
  const sanitizedText = DOMPurify.sanitize(text);

  const paragraphs = sanitizedText?.split("\n\n");

  return (
    <div>
      {paragraphs?.map((paragraph, index) => (
        <p
          key={index}
          style={{ marginBottom: "1.5em", whiteSpace: "pre-line" }}
          dangerouslySetInnerHTML={{ __html: paragraph }}
        />
      ))}
    </div>
  );
};

export default FormattedText;
