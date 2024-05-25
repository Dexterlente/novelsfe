import React from "react";
import { formatTimestamp } from "../utils/dateFormatter";
import FormattedText from "./formatterContent";

const Chapter = ({ data }: any) => {
  return (
    <div className="min-h-screen text-white">
      <div className="text-2xl font-bold mt-10">{data?.title}</div>
      <div>{formatTimestamp(data?.timestamp)}</div>
      <div className="mt-5 mb-10">
        <FormattedText text={data?.content} />
      </div>
    </div>
  );
};

export default Chapter;
