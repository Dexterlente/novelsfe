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
          <h2 className="text-xl font-semibold mb-2">Grid 1</h2>
          <ul>
            {data?.chapters?.filter((_, index: any) => index % 2 === 0).map((chapter: any) => (
              <li key={chapter.index} className="mb-2">
                {chapter.title} - Published on{" "}
                {new Date(chapter.timestamp).toLocaleDateString()}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Grid 2</h2>
          <ul>
            {data?.chapters?.filter((_, index) => index % 2 !== 0).map((chapter: any) => (
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