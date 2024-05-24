import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface Props {
  currentPage: number;
  totalPages: number;
  path: string;
}

export function PaginationButton({ currentPage, totalPages, path }: Props) {
  console.log("page", currentPage);
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          {currentPage !== 1 && (
            <PaginationPrevious href={`${path}&page=${currentPage - 1}`} />
          )}
        </PaginationItem>
        {[...Array(totalPages)].map((_, index) => {
          // Render only previous two and next two pages
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
                  href={`${path}&page=${index + 1}`}
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
          return null;
        })}
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          {currentPage !== totalPages && (
            <PaginationNext href={`${path}&page=${currentPage + 1}`} />
          )}
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
