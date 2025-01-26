import React from "react";

interface Props {
  children: any;
}

const FullScreenAdhoc = ({ children }: Props) => {
  return (
    <div className="block">
      <div className="grid grid-cols-1 mx-3 sm:grid-cols-[1fr,3fr,1fr]">
        <div></div>
        <div>{children}</div>
        <div></div>
      </div>
    </div>
  );
};

export default FullScreenAdhoc;
