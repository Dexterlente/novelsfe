import useSWR from "swr";
import { fetcher } from "../utils/fetcher";

export const useFetchNovelChapters = (id: string, page?: any) => {
  let url = `/api/novels/chapters/${id}`;

  if (page !== undefined || page !== null || page !== "") {
    url += `?page=${page}`;
  }

  const { data, isLoading } = useSWR(url, fetcher, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  return { data, isLoading };
};
