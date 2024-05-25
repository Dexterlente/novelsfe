import useSWR from "swr";
import { fetcher } from "../utils/fetcher";

export const useFetchNovelDetails = (id: string) => {
  const url = `/api/novels/details/${id}`;
  const { data, isLoading } = useSWR(url, fetcher);

  return { data, isLoading };
};
