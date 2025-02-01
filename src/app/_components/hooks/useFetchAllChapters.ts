import { useState, useEffect } from 'react';
import decodeProtobuf from './decodeProtoBuf';
import { chapters } from '@/app/_proto/chapterlist';

export const useFetchAllChapters = (id: string, page: any, reverse?: boolean) => {
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
  let url = `/api/novels/chapters/all/${id}`;

  if (page !== undefined || page !== null || page !== "") {
    url += `?page=${page}`;
  }

  if (reverse !== undefined || reverse !== null || reverse !== "") {
    url += `&reverse=${reverse}`;
  }
// TODO ADD REVERSE PARAMS
  const fetchProtobufData = async () => {
    setIsLoading(true);
      try {
        const response = await fetch(url, {
          headers: { 'Accept': 'application/x-protobuf' },
        });

        const base64String = await response.text();

        const decodedData = decodeProtobuf(base64String, chapters.ChaptersList.deserializeBinary);
        
        setData(decodedData);
      } catch (err: any) {
        setError(err?.message || 'Error fetching or decoding data');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProtobufData();
  }, [id, page, reverse]);

  return { data, isLoading, error };
};
