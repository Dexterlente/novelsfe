// NovelChapters.js

import { useFetchNovelChapters } from "@/app/_components/hooks/useFetchNovelChapters";
import React, { useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { useFetchAllChapters } from "@/app/_components/hooks/useFetchAllChapters";

const NovelChapters = ({ id }: any) => {
  const [currentPage, setCurrentPage] = useState(1);

  const { data } = useFetchNovelChapters(id, currentPage);

  if (!data || !data.chapters) {
    return <div>Loading...</div>;
  }

  const chaptersPerPage = 50;
  const totalPages = Math.ceil(data.total_items / chaptersPerPage);

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="text-white">
      <div>Novel Chapters</div>

      {Array.from({ length: totalPages }, (_, index) => {
        const startIdx = index * chaptersPerPage;
        const endIdx = startIdx + chaptersPerPage;
        const pageData = data.chapters.slice(startIdx, endIdx);

        const chapterNumbers = pageData.map(
          (chapter: { chapter_number: any }) => chapter.chapter_number
        );
        const highestChapterNumber = chapterNumbers.length
          ? Math.max(...chapterNumbers)
          : "N/A";
        const lowestChapterNumber = chapterNumbers.length
          ? Math.min(...chapterNumbers)
          : "N/A";

        return (
          //   <Collapsible key={index}>
          //     <CollapsibleTrigger onClick={() => handlePageClick(index + 1)}>
          //       Page {index + 1} - Highest: {highestChapterNumber}, Lowest:{" "}
          //       {lowestChapterNumber}
          //     </CollapsibleTrigger>
          //     <CollapsibleContent isOpen={currentPage === index + 1}>
          //       {pageData.map((chapter: any) => (
          //         <p key={chapter.chapter_number}>
          //           Chapter {chapter.chapter_number}: {chapter.title}
          //         </p>
          //       ))}
          //     </CollapsibleContent>
          //   </Collapsible>
          <></>
        );
      })}
    </div>
  );
};

export default NovelChapters;
