"use client";
import Chapter from "@/app/_components/common/chapter";
import { useGetChapter } from "@/app/_components/hooks/useGetChapter";
import { useParams } from "next/navigation";
import React from "react";

const Page = () => {
  const params = useParams<{ id: string; chapter_id: string }>();
  const { data } = useGetChapter(params.id, params.chapter_id);
  return <Chapter data={data} />;
};

export default Page;
