export async function GET(
  req: Request,
  { params }: { params: { id: string; chapter_id: string; subchapter?: string } }
) {
  const { id: novel_id, chapter_id, subchapter } = params;
  
  const url = subchapter
    ? `${process.env.API_URL}/chapters-details/${novel_id}/${chapter_id}/${subchapter}`
    : `${process.env.API_URL}/chapters-details/${novel_id}/${chapter_id}`

    try {
      const response = await fetch(url, {
        headers: {
          "Accept": "application/x-protobuf",
        },
      });
  
      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }
  
      const buffer = await response.arrayBuffer();
      
      return new Response(buffer, {
        status: 200,
        headers: {
          "Content-Type": "application/x-protobuf",
          "Cache-Control": "no-store, max-age=0",
        },
      });
  
    } catch (error) {
      console.error("Error fetching protobuf data:", error);
      return new Response(
        JSON.stringify({ 
          error: "Internal Server Error",
          message: error instanceof Error ? error.message : "Unknown error"
        }),
        {
          status: 500,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }
  }