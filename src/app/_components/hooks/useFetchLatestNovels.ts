import { useState, useEffect } from 'react';
import decodeProtobuf from './decodeProtoBuf';
import { chapters } from '@/app/_proto/chapterlist';

export const useFetchLatestNovels = () => {
    const [data, setData] = useState<any>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {

    const url = `/api/novels/latest`;
    const fetchProtobufData = async () => {
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
  }, []);
  return { data, isLoading, error };
  };
