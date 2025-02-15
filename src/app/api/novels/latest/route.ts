export async function GET() {
  const url = `${process.env.API_URL}/novel/list-latest/?timestamp=${Date.now()}`;

  try {
    const response = await fetch(url, {
      headers: {
        "Accept": "application/x-protobuf",
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch latest novels: ${response.statusText}`);
    }

    const buffer = await response.arrayBuffer();

    return new Response(buffer, {
      status: 200,
      headers: {
        "Content-Type": "application/x-protobuf",
        "Cache-Control": "no-cache, no-store, must-revalidate",
        "Pragma": "no-cache",
        "Expires": "0",
      },
    });

  } catch (error) {
    console.error("Error fetching latest novels:", error);
    return new Response(
      JSON.stringify({
        error: "Failed to retrieve latest novels",
        details: error instanceof Error ? error.message : "Unknown error"
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}