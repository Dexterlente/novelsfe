import React from 'react'
import { Button } from "@/components/ui/button";

interface Props{
    data:any
}

const NovelTags = ({data}: Props) => {
  return (
    <div className='text-white pt-2'>
        <div className='font-bold text-[24px] mb-2'>Tags</div>
        <div className="flex flex-wrap">
                {data?.tags?.split(',').map((tags: any, index: any) => (
                  <Button className="mr-2 px-[6px] rounded-lg mb-2" key={index}>
                    {tags.trim()}
                  </Button>
                ))}
              </div>
    </div>
  )
}

export default NovelTags