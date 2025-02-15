import { useEffect, useState } from "react";
import decodeProtobuf from "./decodeProtoBuf";
import { novels } from '@/app/_proto/novels';


export const useFetchNovelsGenre = (id: string, page?: any) => {
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  let url = `/api/novels/genre/filter/${id}`;

  if (page !== undefined || page !== null || page !== "") {
    url += `?page=${page}`;
  }

  useEffect(() => {
  const fetchProtobufData = async () => {
    try {
      const response = await fetch(url, {
        headers: { 'Accept': 'application/x-protobuf' },
      });

      const base64String = await response.text();

      const decodedData = decodeProtobuf(base64String, novels.NovelList.deserializeBinary);
      
      setData(decodedData);
    } catch (err: any) {
      setError(err?.message || 'Error fetching or decoding data');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  fetchProtobufData();
}, [id, page, url]);
return { data, isLoading, error };
};
