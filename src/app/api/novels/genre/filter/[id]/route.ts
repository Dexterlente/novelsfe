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
        Accept: "application/x-protobuf",
      },
    });

    return response;

  } catch (error) {
    console.error("Error fetching protobuf data:", error);
    return new Response("Error", { status: 500 });
  }
}
