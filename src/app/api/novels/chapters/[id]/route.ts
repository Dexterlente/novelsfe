import axios from "axios";
import { NextRequest } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = params.id;

  let url = `${process.env.API_URL}/get-chapters/${id}`;

  const page = req.nextUrl.searchParams.get("page");
  if (page !== null) {
    url += `?page=${page}`;
  }

  const response = await axios.get(url);

  const data = await response.data;

  return Response.json(data);
}
