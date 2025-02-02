"use client"
import { useFetchAllChapters } from '@/app/_components/hooks/useFetchAllChapters'
import { formatTimestamp } from '@/app/_components/utils/dateFormatter';
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationPrevious,
    PaginationNext,
    PaginationLink,
    PaginationEllipsis,
  } from '@/components/ui/pagination';

import React, { useState, useEffect } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import Loader from '@/app/_components/common/loader';
import ArrowButton from '@/app/_components/utils/arrowbutton';
import { Button } from '@/components/ui/button';
import { BsReverseListColumnsReverse } from "react-icons/bs";
import { PaginationButton } from '@/app/_components/common/pagination';


const Page = ({ params }: { params: { id: string } }) => {
    const { push } = useRouter();
    const [ toggled, setToggled ]= useState(false)
    const searchParams = useSearchParams();
    const pathname = usePathname()
    const page = Number(searchParams.get("page") || "1");
  
    const {data, isLoading, error} = useFetchAllChapters(params.id, page, toggled)

    const toggle = () => {
        setToggled((prev: any) => !prev);
      };

  return (
    <>
    {isLoading ? (<Loader /> ) 
    : (
    <div className="container mx-auto p-4 min-h-screen">
        <h1 className="text-3xl text-center text-white font-bold mb-4">All Chapters</h1>
        <div className="flex justify-center my-4">
                <PaginationButton
                                        currentPage={data?.current_page}
                                        totalPages={data?.total_pages}
                                        path={pathname}
                                        isFilter={true}
                                        toggle={toggle}
                                    />
        </div>
                {/* fullsize  below */}
        <div className="flex items-center justify-center">
        <div className="md:hidden">
            <ul>
                {data?.chapters?.map((chapter: any, index: any) => (
                    <li key={chapter.index}
                        onClick={() => {
                            const basePath = `/novels/chapter/${chapter?.novel_id}/${chapter?.index}`;
                            const subChapterPath = chapter?.subchapter > 0 ? `/${chapter?.subchapter}` : '';
                            push(basePath + subChapterPath);
                            window.scrollTo(0, 0);
                        }}
                       className="mb-2 flex items-center border border-solid hover:border-black p-4 rounded-lg w-[350px] lg:w-[400px] hover:cursor-pointer hover:bg-white text-white hover:text-black">
                        <span className="mr-4 text-gray-400">{chapter?.subchapter > 0 ? `${chapter?.index}.${chapter.subchapter}` : chapter?.index}</span>
                        <div className="flex flex-col items-start">
                            <div className='font-bold'>{chapter?.title}</div>
                            <div>{formatTimestamp(chapter?.timestamp)}</div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
        </div>
        {/* fullsize  below */}
        <div className="flex items-center justify-center">
        <div className="hidden md:grid grid-cols-2 gap-14">
            <div>
            <ul>
                {data?.chapters?.filter((_: any, index: any) => index % 2 === 0).map((chapter: any) => (
                <li key={chapter.index}  onClick={() => {
                    const basePath = `/novels/chapter/${chapter?.novel_id}/${chapter?.index}`;
                    const subChapterPath = chapter?.subchapter > 0 ? `/${chapter?.subchapter}` : '';
                    push(basePath + subChapterPath);
                    window.scrollTo(0, 0);
                  }} className="mb-2 h-[100px] flex items-center border border-solid hover:border-black p-4 rounded-lg w-[350px] lg:w-[400px] hover:cursor-pointer hover:bg-white text-white hover:text-black">
                    <span className="mr-4 text-gray-400">{chapter?.subchapter > 0 ? `${chapter?.index}.${chapter.subchapter}` : chapter?.index}</span>
                    <div className="flex flex-col items-start">
                        <div className='font-bold'>{chapter?.title}</div>
                        <div>{formatTimestamp(chapter?.timestamp)}</div>
                    </div>
                </li>
                ))}
            </ul>
            </div>
            <div>
            <ul>
                {data?.chapters?.filter((_: any, index: any) => index % 2 !== 0).map((chapter: any) => (
                 <li key={chapter.index}
                    onClick={() => {
                        const basePath = `/novels/chapter/${chapter?.novel_id}/${chapter?.index}`;
                        const subChapterPath = chapter?.subchapter > 0 ? `/${chapter?.subchapter}` : '';
                        push(basePath + subChapterPath);
                        window.scrollTo(0, 0);
                    }}
                  className="mb-2 h-[100px] flex items-center border border-solid hover:border-black p-4 rounded-lg w-[350px] lg:w-[400px] hover:cursor-pointer hover:bg-white text-white hover:text-black">
                    <span className="mr-4 font-bold text-gray-400">{chapter?.subchapter > 0 ? `${chapter?.index}.${chapter.subchapter}` : chapter?.index}</span>
                    <div className="flex flex-col items-start">
                        <div className='font-bold'>{chapter.title}</div>
                        <div>{formatTimestamp(chapter?.timestamp)}</div>
                    </div>
                </li>
                ))}
            </ul>
            </div>
 
        </div>
        </div>
        <ArrowButton />
    </div>
    )}
    </>
    )
}

export default Page