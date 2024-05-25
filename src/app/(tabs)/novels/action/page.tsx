"use client";
import FullScreenAdhoc from "@/app/_adhoc/fullscreenadhoc";
import LgScreenAdhoc from "@/app/_adhoc/lgscreenadhoc";
import MdScreenAdhoc from "@/app/_adhoc/mdscreenadhoc";
import MobileScreenAdhoc from "@/app/_adhoc/mobilescreenadhoc";
import BookList from "@/app/_components/common/booklist";
import { useFetchNovelsGenre } from "@/app/_components/hooks/useFetchNovelsGenre";
import { useSearchParams } from "next/navigation";
import React from "react";

const Page = () => {
  const searchParams = useSearchParams();
  const page = searchParams.get("page");
  const { data, isLoading } = useFetchNovelsGenre(1, page);
  console.log(data);

  return (
    <div className="min-h-screen">
      <FullScreenAdhoc>
        <BookList data={data} path={`action`} />
      </FullScreenAdhoc>
      <LgScreenAdhoc>a</LgScreenAdhoc>
      <MdScreenAdhoc>a</MdScreenAdhoc>
      <MobileScreenAdhoc> a</MobileScreenAdhoc>
    </div>
  );
};

export default Page;
