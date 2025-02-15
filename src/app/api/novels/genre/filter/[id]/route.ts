import axios, { AxiosResponse } from "axios";
import { NextRequest } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
): Promise<Response> {
  const id = params.id;

  let url = `${process.env.API_URL}/novels/single/?genre=${id}`;

  const page = req.nextUrl.searchParams.get("page");

  if (page !== null) {
    url += `&page=${page}&timestamp=${Date.now()}`;
  }

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