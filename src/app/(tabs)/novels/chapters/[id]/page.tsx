"use client"
import { useFetchAllChapters } from '@/app/_components/hooks/useFetchAllChapters'
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

const Page = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const {data, isLoading, error} = useFetchAllChapters("1", currentPage)

    console.log(data)

    const handlePageChange = (newPage: any) => {
        setCurrentPage(newPage);
    }
  
    const renderPaginationItem = (page: any) => (
        <PaginationItem key={page}>
            <PaginationLink href="#" onClick={(e) => { e.preventDefault(); handlePageChange(page); }}>
                {page}
            </PaginationLink>
        </PaginationItem>
    );


  return (
    <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Chapters</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
            <ul>
                {data?.chapters?.filter((_: any, index: any) => index % 2 === 0).map((chapter: any) => (
                <li key={chapter.index} className="mb-2">
                    {chapter.title} - Published on{" "}
                    {new Date(chapter.timestamp).toLocaleDateString()}
                </li>
                ))}
            </ul>
            </div>
            <div>
            <ul>
                {data?.chapters?.filter((_: any, index: any) => index % 2 !== 0).map((chapter: any) => (
                <li key={chapter.index} className="mb-2">
                    {chapter.title} - Published on{" "}
                    {new Date(chapter.timestamp).toLocaleDateString()}
                </li>
                ))}
            </ul>
            </div>
            <div className="container mx-auto p-4">
            <div className="flex justify-center mt-4">
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
        </div>
        </div>
    </div>
    )
}

export default Page