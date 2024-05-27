import { useFetchNovelChapters } from "@/app/_components/hooks/useFetchNovelChapters";
import { useSearchParams } from "next/navigation";
import React from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const NovelChapters = ({ id }: any) => {
  const searchParams = useSearchParams();

  const { data } = useFetchNovelChapters(id, 1);

  if (!data || !data.chapters) {
    return <div>Loading...</div>;
  }

  const chaptersPerPage = 50;
  const totalPages = Math.ceil(data.total_items / chaptersPerPage);

  const paginatedChapters = Array.from(
    { length: totalPages },
    (_, pageIndex) => {
      const startIdx = pageIndex * chaptersPerPage;
      const endIdx = startIdx + chaptersPerPage;
      return data.chapters.slice(startIdx, endIdx);
    }
  );

  return (
    <div className="text-white">
      <div>Novel Chapters</div>

      {paginatedChapters.map((pageData, index) => {
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
          <Collapsible key={index}>
            <CollapsibleTrigger>
              Page {index + 1} - Highest: {highestChapterNumber}, Lowest:{" "}
              {lowestChapterNumber}
            </CollapsibleTrigger>
            <CollapsibleContent>
              {pageData.map((chapter: any) => (
                <p key={chapter.chapter_number}>
                  Chapter {chapter.chapter_number}: {chapter.title}
                </p>
              ))}
            </CollapsibleContent>
          </Collapsible>
        );
      })}
    </div>
  );
};

export default NovelChapters;
