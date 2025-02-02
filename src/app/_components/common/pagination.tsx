import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { usePathname } from "next/navigation";
import { BsReverseListColumnsReverse } from "react-icons/bs";

interface Props {
  currentPage: number;
  totalPages: number;
  path: string;
  isFilter?: boolean;
  toggle?: any;
}

export function PaginationButton({ currentPage, totalPages, path, isFilter, toggle }: Props) {
  const pathname = usePathname();
  const separator = pathname === "/search" ? "&" : "?";

  if (totalPages === 1) return null;

  // Calculate the set of pages that should always be visible.
  const pagesSet = new Set<number>();
  pagesSet.add(1);
  pagesSet.add(totalPages);

  // Always include the active page and its immediate neighbors
  if (currentPage - 1 >= 1) pagesSet.add(currentPage - 1);
  pagesSet.add(currentPage);
  if (currentPage + 1 <= totalPages) pagesSet.add(currentPage + 1);

  // Create a sorted array of the pages
  const visiblePages = Array.from(pagesSet).sort((a, b) => a - b);

  // Build the final list of items (numbers or ellipsis)
  const paginationItems: (number | "ellipsis")[] = [];
  for (let i = 0; i < visiblePages.length; i++) {
    if (i === 0) {
      paginationItems.push(visiblePages[i]);
      continue;
    }

    const prevPage = visiblePages[i - 1];
    const currentPageNum = visiblePages[i];

    if (currentPageNum - prevPage === 2) {
      // There is only one missing page so we show it
      paginationItems.push(prevPage + 1);
    } else if (currentPageNum - prevPage > 2) {
      // More than one page missing so we render an ellipsis
      paginationItems.push("ellipsis");
    }

    paginationItems.push(currentPageNum);
  }

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          {currentPage !== 1 && (
            <PaginationPrevious href={`${path}${separator}page=${currentPage - 1}`} />
          )}
        </PaginationItem>

        {paginationItems.map((item, idx) => {
          if (item === "ellipsis") {
            return (
              <PaginationItem key={`ellipsis-${idx}`}>
                <PaginationEllipsis />
              </PaginationItem>
            );
          }

          // Render a page button
          return (
            <PaginationItem key={item}>
              <PaginationLink
                href={`${path}${separator}page=${item}`}
                isActive={item === currentPage}
              >
                {item}
              </PaginationLink>
            </PaginationItem>
          );
        })}

        <PaginationItem>
          {currentPage !== totalPages && (
            <PaginationNext href={`${path}${separator}page=${currentPage + 1}`} />
          )}
        </PaginationItem>
      </PaginationContent>
      { isFilter && (
      <BsReverseListColumnsReverse 
      onClick={toggle}
                className='text-white hover:bg-white hover:text-black h-[10px] w-[10px] sm:h-[40px] sm:w-[40px] p-2 hover:rounded-lg hover:cursor-pointer ' />
      )}
    </Pagination>
  );
}
