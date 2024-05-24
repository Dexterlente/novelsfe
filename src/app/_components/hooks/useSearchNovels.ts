import useSWR from "swr";
import { fetcher } from "../utils/fetcher";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export const useSearchNovels = (query: any, page: any) => {
  const [searchQuery, setSearchQuery] = useState("");
  const pageNumber = page || "";
  let url = `/api/novels/search?query=${query}`;

  if (page !== undefined || page !== null || page !== "") {
    url += `&page=${pageNumber}`;
  }

  const { data, isLoading } = useSWR(url, fetcher, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  useEffect(() => {
    if (query) {
      setSearchQuery(query);
    }
  }, [query, setSearchQuery]);

  return { data, searchQuery, isLoading };
};
