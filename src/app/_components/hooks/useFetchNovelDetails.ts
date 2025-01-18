import { useState, useEffect } from 'react';
import decodeProtobuf from './decodeProtoBuf';
import { novels } from '@/app/_proto/noveldetails';

export const useFetchNovelDetails = (id: string) => {
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {

    if (!id) {
      setIsLoading(false);
      setData(null);
      return;
    }

    const url = `/api/novels/details/${id}`;
    const fetchProtobufData = async () => {
      try {
        const response = await fetch(url, {
          headers: { 'Accept': 'application/x-protobuf' },
        });

        const base64String = await response.text();

        const decodedData = decodeProtobuf(base64String, novels.NovelDetails.deserializeBinary);
        
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
  return { data, isLoading, error };
};
