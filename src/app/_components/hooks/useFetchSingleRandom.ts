import useSWR from "swr";
import { fetcher } from "../utils/fetcher";

export const useFetchSingleRandom = (id: number) => {
  const url = `/api/novels/random/single/${id}`;
  const { data, isLoading } = useSWR(url, fetcher, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  return { data, isLoading };
};
