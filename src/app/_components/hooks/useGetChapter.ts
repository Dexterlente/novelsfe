import { useState, useEffect } from 'react';
import { chapters } from '@/app/_proto/chapterdetail';
import decodeProtobuf from './decodeProtoBuf';

export const useGetChapter = (id: any, chapter_id: any, sub_chapter?: any) => {
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  let url = sub_chapter 
    ? `/api/novels/chapters/${id}/${chapter_id}/${sub_chapter}` 
    : `/api/novels/chapters/${id}/${chapter_id}`;
    

  useEffect(() => {
    if (!id || !chapter_id) {
      setIsLoading(false);
      setData(null)
      return;
    }

    const fetchProtobufData = async () => {
      try {
        const response = await fetch(url, {
          headers: { 'Accept': 'application/x-protobuf' },
        });

        const base64String = await response.text();

        const decodedData = decodeProtobuf(base64String, chapters.ChapterDetails.deserializeBinary);
        
        setData(decodedData);
      } catch (err: any) {
        setError(err?.message || 'Error fetching or decoding data');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProtobufData();
  },[id, chapter_id, sub_chapter, url]);

  return { data, isLoading, error };
};
