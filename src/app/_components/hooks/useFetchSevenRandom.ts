import useSWR from "swr";
import { fetcher } from "../utils/fetcher";

export const useFetchSevenRandom = (id: number) => {
  const url = `/api/novels/random/seven/${id}`;
  const { data, isLoading } = useSWR(url, fetcher, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  return { data, isLoading };
};
