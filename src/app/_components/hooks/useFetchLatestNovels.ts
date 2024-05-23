import useSWR from "swr";
import { fetcher } from "../utils/fetcher";

export const useFetchLatestNovels = () => {
  const url = `/api/novels/latest`;
  const { data, isLoading } = useSWR(url, fetcher);

  return { data, isLoading };
};
