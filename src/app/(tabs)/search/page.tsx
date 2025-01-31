"use client";
import FullScreenAdhoc from "@/app/_adhoc/fullscreenadhoc";
import LgScreenAdhoc from "@/app/_adhoc/lgscreenadhoc";
import MdScreenAdhoc from "@/app/_adhoc/mdscreenadhoc";
import MobileScreenAdhoc from "@/app/_adhoc/mobilescreenadhoc";
import BookList from "@/app/_components/common/booklist";
import { useSearchNovels } from "@/app/_components/hooks/useSearchNovels";
import { useSearchParams } from "next/navigation";
import React from "react";

const Page = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("query");
  const page = searchParams.get("page");
  const { data, searchQuery, isLoading, error  } = useSearchNovels(query, page);

  return (
    <div className="min-h-screen">
      <FullScreenAdhoc>
        <BookList
          data={data}
          searched={searchQuery}
          path={`search?query=${searchQuery}`}
        />
      </FullScreenAdhoc>
    </div>
  );
};

export default Page;
