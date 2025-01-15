'use client'
import React, { useEffect, useState } from 'react';
import { novels } from '@/app/_proto/novels';

const NovelsList: React.FC = () => {
  const [novelsData, setNovelsData] = useState<any>(null);

  useEffect(() => {
    const fetchNovels = async () => {
      try {
        // Fetch the Protobuf data from the backend with the correct header
        const response = await fetch('http://127.0.0.1:8000/api/novels?page=1', {
          headers: {
            'Accept': 'application/x-protobuf', // Tell the server we're expecting Protobuf
          },
        });

        // Ensure the response is text (Base64 encoded)
        const base64String = await response.text();

        // Decode the Base64 string into a binary string
        const binaryString = atob(base64String);

        // Convert the binary string into a byte array (Uint8Array)
        const uint8Array = new Uint8Array(binaryString.length);
        for (let i = 0; i < binaryString.length; i++) {
          uint8Array[i] = binaryString.charCodeAt(i);
        }

        // Deserialize the Protobuf data into a NovelsResponse object
        const novelsResponse = novels.NovelList.deserializeBinary(uint8Array);

        // Log the deserialized response to check the structure
        console.log(novelsResponse.toObject());

        // Update the state with the response
        setNovelsData(novelsResponse.toObject());
      } catch (error) {
        console.error('Error fetching or decoding Protobuf data:', error);
      }
    };

    fetchNovels();
  }, []);

  if (!novelsData) {
    return <div>Loading...</div>;
  }

  // Access the novels array from the response
  const novelsList = novelsData.novels || [];

  return (
    <div>
      <h1>Novels List</h1>
      <div>
        {novelsList.length > 0 ? (
          novelsList.map((novel: any, index: number) => {
            const { novel_id, title, image_url } = novel;
            return (
              <div key={novel_id} style={{ marginBottom: '20px' }}>
                <img src={image_url !== 'None' ? image_url : ''} alt={title} style={{ width: '150px', height: '200px' }} />
                <h3>{title}</h3>
              </div>
            );
          })
        ) : (
          <div>No novels available</div>
        )}
      </div>
    </div>
  );
};

export default NovelsList;
