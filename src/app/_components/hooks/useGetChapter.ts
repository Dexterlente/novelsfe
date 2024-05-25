import useSWR from "swr";
import { fetcher } from "../utils/fetcher";

export const useGetChapter = (id: any, chapter_id: any) => {
  let url = `/api/novels/chapters/${id}/${chapter_id}`;

  const { data, isLoading } = useSWR(url, fetcher, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  return { data, isLoading };
};
