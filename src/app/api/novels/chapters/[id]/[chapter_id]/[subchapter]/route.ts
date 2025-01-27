export async function GET(
  req: Request,
  { params }: { params: { id: string; chapter_id: string; subchapter?: string } }
) {
  const { id: novel_id, chapter_id, subchapter } = params;
  
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
