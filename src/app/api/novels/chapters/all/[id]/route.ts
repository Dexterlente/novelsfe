import { NextRequest } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  let url = `${process.env.API_URL}/chapters/${params.id}`;

    const page = req.nextUrl.searchParams.get("page");

    if (page !== null) {
      url += `?page=${page}`;
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
