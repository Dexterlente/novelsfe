import axios from "axios";

export async function GET(
  req: Request,
  { params }: { params: { id: string; chapter_id: string } }
) {
  const novel_id = params.id;
  const chapter_id = params.chapter_id;

  const response = await axios.get(
    `${process.env.API_URL}/get-chapters/${novel_id}${chapter_id}`
  );

  const data = await response.data;

  return Response.json(data);
}
