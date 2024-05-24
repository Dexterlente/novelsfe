import useSWR from "swr";
import { fetcher } from "../utils/fetcher";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export const useSearchNovels = (query: any) => {
  const [searchQuery, setSearchQuery] = useState("");

  const url = `/api/novels/search?query=${query}`;

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
