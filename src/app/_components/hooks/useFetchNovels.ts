import useSWR from "swr";
import { fetcher } from "../utils/fetcher";

export const useFetchNovels = (page: number) => {
  const url = `/api/novels${page}`;
  const { data, isLoading } = useSWR(url, fetcher);

  return { data, isLoading };
};
