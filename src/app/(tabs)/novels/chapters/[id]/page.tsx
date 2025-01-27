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
import { useRouter } from 'next/navigation';

const Page = ({ params }: { params: { id: string } }) => {
    const { push } = useRouter();

    const [currentPage, setCurrentPage] = useState(1)
    const {data, isLoading, error} = useFetchAllChapters(params.id, currentPage)

    const handlePageChange = (newPage: any) => {
        setCurrentPage(newPage);
    }
  
    const renderPaginationItem = (page: any) => (
        <PaginationItem key={page}>
            <PaginationLink href="#" isActive={page === currentPage} onClick={(e) => { e.preventDefault(); handlePageChange(page); }}>
                {page}
            </PaginationLink>
        </PaginationItem>
    );

  return (
    <div className="container mx-auto p-4 min-h-screen">
        <h1 className="text-3xl text-center text-white font-bold mb-4">All Chapters</h1>
        <div className="flex justify-center my-4">
                <Pagination>
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious href="#" onClick={(e) => { e.preventDefault(); if (currentPage > 1) handlePageChange(currentPage - 1); }} />
                        </PaginationItem>
                        {currentPage > 2 && renderPaginationItem(1)}
                        {currentPage > 3 && <PaginationEllipsis />}
                        {currentPage > 1 && renderPaginationItem(currentPage - 1)}
                        {renderPaginationItem(currentPage)}
                        {currentPage < data?.total_pages && renderPaginationItem(currentPage + 1)}
                        {currentPage < data?.total_pages - 1 && <PaginationEllipsis />}
                        {currentPage < data?.total_pages - 1 && renderPaginationItem(data?.total_pages)}
                        <PaginationItem>
                            <PaginationNext href="#" onClick={(e) => { e.preventDefault(); if (currentPage < data?.total_pages) handlePageChange(currentPage + 1); }} />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
        </div>
                {/* fullsize  below */}
        <div className="flex items-center justify-center">
        <div className="md:hidden">
            <ul>
                {data?.chapters?.map((chapter: any, index: any) => (
                    <li key={chapter.index}
                        onClick={() => {
                            const basePath = `/novels/chapter/${chapter?.novel_id}/${chapter?.index}`;
                            const subChapterPath = chapter?.sub_chapter > 0 ? `/${chapter?.sub_chapter}` : '';
                            push(basePath + subChapterPath);
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
                    const subChapterPath = chapter?.sub_chapter > 0 ? `/${chapter?.sub_chapter}` : '';
                    push(basePath + subChapterPath);
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
                        const subChapterPath = chapter?.sub_chapter > 0 ? `/${chapter?.sub_chapter}` : '';
                        push(basePath + subChapterPath);
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
    </div>
    )
}

export default Page