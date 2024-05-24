import axios from "axios";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const query = searchParams.get("query");
  const page = searchParams.get("page");

  const params = { query: query ? query : undefined, page };

  const response = await axios.get(`${process.env.API_URL}/search`, {
    params,
  });
  const data = response.data;
  return Response.json(data);
}
