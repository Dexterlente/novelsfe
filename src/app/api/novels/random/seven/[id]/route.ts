import { NextRequest } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
): Promise<Response> {
  const id = params.id;

  let url = `${process.env.API_URL}/novel/list-random/?genre=${id}&timestamp=${Date.now()}`;

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
