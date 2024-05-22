export const limitText = (text: string, maxLength: number) => {
  const cleanedText = text?.replace(/Synopsis\s*/i, "");
  if (cleanedText?.length > maxLength) {
    return cleanedText.substring(0, maxLength) + "...";
  }
  return cleanedText;
};
