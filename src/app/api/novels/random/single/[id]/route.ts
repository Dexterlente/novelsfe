import { NextRequest } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
): Promise<Response> {
  const id = params.id;

  const url = `${process.env.API_URL}/novel/random/?genre=${id}&timestamp=${Date.now()}`;
  
  try {
    const response = await fetch(url, {
      headers: {
        "Accept": "application/x-protobuf",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Read the response body as ArrayBuffer
    const buffer = await response.arrayBuffer();

    // Return the protobuf response with proper headers
    return new Response(buffer, {
      status: response.status,
      headers: {
        "Content-Type": "application/x-protobuf",
        "Cache-Control": "no-store, max-age=0",
      },
    });

  } catch (error) {
    console.error("Error fetching protobuf data:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
