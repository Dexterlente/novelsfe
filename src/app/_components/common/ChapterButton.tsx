import React from 'react'
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";


const ChapterButton = ({novel_id, direction, style, btnTitle, subchapter}: any) => {
const { push } = useRouter();

const url = subchapter && subchapter > 0 
    ? `/novels/chapter/${novel_id}/${direction}/${subchapter}` 
    : `/novels/chapter/${novel_id}/${direction}`;

  return (
    <div className={`${style}`}>
            <Button
              onClick={() =>
                push(url)
              }
            >
              {btnTitle}
            </Button>
          </div>
  )
}

export default ChapterButton