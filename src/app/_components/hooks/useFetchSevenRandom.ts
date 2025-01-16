import useSWR from "swr";
import { fetcher } from "../utils/fetcher";
import decodeProtobuf from './decodeProtoBuf';
import { novels } from '@/app/_proto/novels';
import { useState, useEffect } from 'react';

export const useFetchSevenRandom = (id: string) => {
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {

    if (!id) {
      setIsLoading(false);
      setData(null);
      return;
    }

    const url = `/api/novels/random/seven/${id}`;
    const fetchProtobufData = async () => {
      try {
        const response = await fetch(url, {
          headers: { 'Accept': 'application/x-protobuf' },
        });

        const base64String = await response.text();

        // Decode and deserialize Protobuf data
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
  }, [id]);
  console.log("seven hook", data)
  return { data, isLoading, error };
};
