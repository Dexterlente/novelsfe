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

interface Props {
  currentPage: number;
  totalPages: number;
  path: string;
}

export function PaginationButton({ currentPage, totalPages, path }: Props) {
  const pathname = usePathname();
  console.log(pathname);
  console.log("page", currentPage);

  const separator = pathname === "/search" ? "&" : "?";

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          {currentPage !== 1 && (
            <PaginationPrevious href={`${path}&page=${currentPage - 1}`} />
          )}
        </PaginationItem>
        {[...Array(totalPages)].map((_, index) => {
          if (totalPages === currentPage) {
            // Logic to render only the left side when on the last page
            if (
              index === 0 ||
              index === currentPage - 3 ||
              index === currentPage - 2 ||
              index === currentPage - 1
            ) {
              return (
                <PaginationItem key={index}>
                  <PaginationLink
                    href={`${path}${separator}page=${index + 1}`}
                    isActive={index + 1 === currentPage}
                  >
                    {index + 1}
                  </PaginationLink>
                </PaginationItem>
              );
            }
            // Render ellipsis before the last three pages if there are more pages before
            if (index === 1 && currentPage > 4) {
              return (
                <PaginationItem key={index}>
                  <PaginationEllipsis />
                </PaginationItem>
              );
            }
          } else {
            // Original logic for when totalPages is not equal to currentPage
            if (
              index === 0 ||
              index === currentPage - 1 ||
              index === currentPage ||
              index === currentPage + 1 ||
              index === totalPages - 1
            ) {
              return (
                <PaginationItem key={index}>
                  <PaginationLink
                    href={`${path}${separator}page=${index + 1}`}
                    isActive={index + 1 === currentPage}
                  >
                    {index + 1}
                  </PaginationLink>
                </PaginationItem>
              );
            }
            // Render ellipsis
            if (index === 1 || index === totalPages - 2) {
              return (
                <PaginationItem key={index}>
                  <PaginationEllipsis />
                </PaginationItem>
              );
            }
          }
          return null;
        })}

        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          {currentPage !== totalPages && (
            <PaginationNext
              href={`${path}${separator}page=${currentPage + 1}`}
            />
          )}
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
