import { NextRequest } from "next/server";
import axios from "axios";

export async function GET(req: NextRequest) {
  let url = `${process.env.API_URL}/get-novels`;
  const page = req.nextUrl.searchParams.get("page");

  if (page !== null) {
    url += `?page=${page}`;
  }

  const response = await axios.get(url);
  const data = response.data;
  return Response.json(data);
}
