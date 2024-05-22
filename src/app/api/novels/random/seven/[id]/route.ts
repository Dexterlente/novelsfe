import axios, { AxiosResponse } from "axios";
import { NextRequest } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
): Promise<Response> {
  const id = params.id;

  let url = `${process.env.API_URL}/get-novels-random/${id}`;

  const response = await axios.get(url);

  const data = await response.data;

  return Response.json(data);
}
