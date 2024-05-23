import { NextRequest } from "next/server";
import axios from "axios";

export async function GET() {
  let url = `${process.env.API_URL}/get-latest-chapters`;

  const response = await axios.get(url);
  const data = response.data;
  return Response.json(data);
}
