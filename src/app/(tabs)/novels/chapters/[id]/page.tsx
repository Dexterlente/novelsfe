"use client"
import { useFetchAllChapters } from '@/app/_components/hooks/useFetchAllChapters'
import React from 'react'

const Page = () => {
const {data, isLoading, error}  = useFetchAllChapters("1", 1)
console.log(data)
  return (
    <div>
      <h1>Chapters</h1>
      <ul>
        {data?.chapters?.map((chapter: any) => (
          <li key={chapter.index}>
            {chapter.title} - Published on{" "}
            {new Date(chapter.timestamp).toLocaleDateString()}
          </li>
        ))}
      </ul>
    </div>
  )
}                                                                                                                                                                                                                                                                                                                                                                                                                   

export default Page