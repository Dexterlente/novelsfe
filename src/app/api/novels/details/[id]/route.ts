export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  const url =  `${process.env.API_URL}/novel-details/${id}/?timestamp=${Date.now()}`

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
