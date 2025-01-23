"use client"
import { useFetchAllChapters } from '@/app/_components/hooks/useFetchAllChapters'
import React from 'react'

const Page = () => {
  const {data, isLoading, error} = useFetchAllChapters("1", 1)
  console.log(data)

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
      </div>
    </div>
  )
}

export default Page