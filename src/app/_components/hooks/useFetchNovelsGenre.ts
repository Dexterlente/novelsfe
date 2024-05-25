import useSWR from "swr";
import { fetcher } from "../utils/fetcher";

export const useFetchNovelsGenre = (id: number, page?: any) => {
  let url = `/api/novels/genre/${id}`;

  if (page !== undefined || page !== null || page !== "") {
    url += `?page=${page}`;
  }

  const { data, isLoading } = useSWR(url, fetcher, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  return { data, isLoading };
};
