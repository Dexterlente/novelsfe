import { novels } from '@/app/_proto/novels';
import { useEffect, useState } from "react";
import decodeProtobuf from "./decodeProtoBuf";

export const useSearchNovels = (query: any, page: any) => {
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const pageNumber = page || "";
  let url = `/api/novels/search?query=${query}`;

  if (page !== undefined || page !== null || page !== "") {
    url += `&page=${pageNumber}`;
  }

  useEffect(() => {
    if (query) {
      setSearchQuery(query);
    }
  }, [query, setSearchQuery]);
  
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
  }, []);

  console.log(data)
  return { data, searchQuery, isLoading, error };
};
