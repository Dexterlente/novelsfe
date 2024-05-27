import { NextRequest } from "next/server";
import axios from "axios";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  let url = `${process.env.API_URL}/get-all-chapters/${params.id}`;

  const response = await axios.get(url);
  const data = response.data;
  return Response.json(data);
}
