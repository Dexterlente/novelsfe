import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-[#131415] h-[100px] flex justify-center items-center">
      <div className=" text-white align-center">
        <p>&copy; {currentYear} Master Novels. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
