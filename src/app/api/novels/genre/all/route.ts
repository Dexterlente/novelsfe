import { NextRequest } from "next/server";

export async function GET(req: NextRequest,) {

    let url =  `${process.env.API_URL}/novels`

    const page = req.nextUrl.searchParams.get("page");

    if (page !== null) {
      url += `?page=${page}&timestamp=${Date.now()}`;
    }
  
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
  