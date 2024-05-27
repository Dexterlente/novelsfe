import { useFetchNovelChapters } from "@/app/_components/hooks/useFetchNovelChapters";
import { useSearchParams } from "next/navigation";
import React, { useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const NovelChapters = ({ id }: any) => {
  const searchParams = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1); // Track current page

  const page = searchParams.get("page") || currentPage; // Use current page from URL if available, otherwise use state
  const { data } = useFetchNovelChapters(id, page);
  const total_pages = data?.total_pages || 0;
  const chapters = data?.chapters || [];

  console.log(data);
  return (
    <div className="text-white">
      <div> Novel Chapters</div>
      {chapters.map((chapter: { chapter_number: number }, index: number) => (
        <Collapsible key={index}>
          <CollapsibleTrigger>
            Page {page}: Chapter {chapter.chapter_number}
          </CollapsibleTrigger>
          <CollapsibleContent>
            <p>
              This is the content for page {page} and chapter{" "}
              {chapter.chapter_number}
            </p>
          </CollapsibleContent>
        </Collapsible>
      ))}
      <div>
        {Array.from({ length: total_pages }, (_, index) => (
          <button key={index} onClick={() => setCurrentPage(index + 1)}>
            Go to Page {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default NovelChapters;
