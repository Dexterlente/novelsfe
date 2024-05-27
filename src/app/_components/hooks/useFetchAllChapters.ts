import useSWR from "swr";
import { fetcher } from "../utils/fetcher";

export const useFetchAllChapters = (id: string) => {
  const url = `/api/novels/chapters/all/${id}`;
  const { data, isLoading } = useSWR(url, fetcher);

  return { data, isLoading };
};
