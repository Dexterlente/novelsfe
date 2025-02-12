import { NextRequest } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  let url = `${process.env.API_URL}/chapters/${params.id}`;

    const page = req.nextUrl.searchParams.get("page");
    const reverse = req.nextUrl.searchParams.get("reverse");

    if (page !== null) {
      url += `?page=${page}&timestamp=${Date.now()}`;
    }

    if (reverse !== null) {
      url += `&reverse=${reverse}`;
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
