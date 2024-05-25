import useSWR from "swr";
import { fetcher } from "../utils/fetcher";

export const useFetchNovelsGenre = (id: number) => {
  const url = `/api/novels/genre/${id}`;
  const { data, isLoading } = useSWR(url, fetcher, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  return { data, isLoading };
};
