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
  const { data, searchQuery, isLoading } = useSearchNovels(query);

  console.log("data", data);

  console.log("search", searchQuery);
  return (
    <div className="min-h-screen">
      <FullScreenAdhoc>
        <BookList data={data} searched={searchQuery} />
      </FullScreenAdhoc>
      <LgScreenAdhoc>a</LgScreenAdhoc>
      <MdScreenAdhoc>a</MdScreenAdhoc>
      <MobileScreenAdhoc> a</MobileScreenAdhoc>
    </div>
  );
};

export default Page;
