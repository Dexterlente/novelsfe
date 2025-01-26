export async function GET(
  req: Request,
  { params }: { params: { id: string; chapter_id: string; subchapter?: string } }
) {
  const novel_id = params.id;
  const chapter_id = params.chapter_id;
  const subchapter = params.subchapter;
  
  const url = subchapter
    ? `${process.env.API_URL}/chapters-details/${novel_id}/${chapter_id}/${subchapter}`
    : `${process.env.API_URL}/chapters-details/${novel_id}/${chapter_id}`

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
