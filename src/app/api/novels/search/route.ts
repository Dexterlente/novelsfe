import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const query = searchParams.get("query");
  const page = searchParams.get("page");
  
  if (!query) {
    return new NextResponse("Missing query parameter", { status: 400 });
  }
  let url = `${process.env.API_URL}/novels/search?title=${encodeURIComponent(query)}`

  if (page !== null) {
    url += `&page=${page}&timestamp=${Date.now()}`;
  }
  console.log("Constructed URL:", url);

  try {
    const response = await fetch(url, {
      headers: {
        Accept: "application/x-protobuf",
      },
    });

    return response;

  } catch (error) {
    console.error("Error fetching protobuf data:", error);
    return new Response("Error", { status: 500 });
  }

}
