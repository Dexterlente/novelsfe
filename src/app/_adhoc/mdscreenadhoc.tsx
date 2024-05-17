import React from "react";

interface Props {
  children: any;
}

const MdScreenAdhoc = ({ children }: Props) => {
  return (
    <div className="hidden md:block lg:hidden">
      <div className="grid grid-cols-[1fr,3fr,1fr]">
        <div></div>
        <div>{children}</div>
        <div></div>
      </div>
    </div>
  );
};

export default MdScreenAdhoc;
