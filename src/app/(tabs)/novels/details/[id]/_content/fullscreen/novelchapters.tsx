import { useFetchNovelChapters } from "@/app/_components/hooks/useFetchNovelChapters";
import { useSearchParams } from "next/navigation";
import React from "react";

const NovelChapters = ({ id }: any) => {
  const searchParams = useSearchParams();

  const page = searchParams.get("page");
  const { data } = useFetchNovelChapters(id, page);
  console.log(data);
  return <div>NovelChapters</div>;
};

export default NovelChapters;
