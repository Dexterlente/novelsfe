import React from "react";
import { formatTimestamp } from "../utils/dateFormatter";
import FormattedText from "./formatterContent";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const Chapter = ({ data }: any) => {
  const { push } = useRouter();

  return (
    <div className="min-h-screen text-white">
      <div className="text-2xl font-bold mt-10">{data?.title}</div>
      <div className="grid grid-cols-2 my-10">
        {data?.previous_chapter_id !== null && (
          <div className="col-start-1">
            <Button
              onClick={() =>
                push(
                  `/novels/chapter/${data?.novel_id}/${data?.previous_chapter_id}`
                )
              }
            >
              Previous
            </Button>
          </div>
        )}

        {data?.next_chapter_id !== null && (
          <div className="col-start-2 flex justify-end">
            <Button
              onClick={() =>
                push(
                  `/novels/chapter/${data?.novel_id}/${data?.next_chapter_id}`
                )
              }
            >
              Next
            </Button>
          </div>
        )}
      </div>
      <div>{formatTimestamp(data?.timestamp)}</div>
      <div className="mt-5 mb-10">
        <FormattedText text={data?.content} />
      </div>
      <div className="grid grid-cols-2 mb-4">
        {data?.previous_chapter_id !== null && (
          <div className="col-start-1">
            <Button
              onClick={() =>
                push(
                  `/novels/chapter/${data?.novel_id}/${data?.previous_chapter_id}`
                )
              }
            >
              Previous
            </Button>
          </div>
        )}

        {data?.next_chapter_id !== null && (
          <div className="col-start-2 flex justify-end">
            <Button
              onClick={() =>
                push(
                  `/novels/chapter/${data?.novel_id}/${data?.next_chapter_id}`
                )
              }
            >
              Next
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Chapter;
