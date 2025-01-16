import { useState, useEffect } from 'react';
import decodeProtobuf from './decodeProtoBuf';
import { novels } from '@/app/_proto/novels';


const useFetchSingleRandom = (genre: string) => {
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {

    if (!genre) {
      setIsLoading(false);
      setData(null);
      return;
    }

    const url = `/api/novels/random/single/${genre}`;
    const fetchProtobufData = async () => {
      try {
        const response = await fetch(url, {
          headers: { 'Accept': 'application/x-protobuf' },
        });

        const base64String = await response.text();

        // Decode and deserialize Protobuf data
        const decodedData = decodeProtobuf(base64String, novels.Novel.deserializeBinary);
        
        setData(decodedData);
      } catch (err: any) {
        setError(err?.message || 'Error fetching or decoding data');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProtobufData();
  }, [genre]);
  return { data, isLoading, error };
};

export default useFetchSingleRandom;

