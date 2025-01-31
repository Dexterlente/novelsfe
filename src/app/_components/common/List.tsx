import React from 'react'
import { PaginationButton } from './pagination'
import { useRouter } from "next/navigation"
import Image from "next/image";

const ImagePlaceholder = '/overgeared.jpg'


const List = ({data, path}:any) => {
    const { push} = useRouter()
  return (
    <div>
        <div className='block sm:hidden'>
          <div>
              {data?.novels?.map((novel: any) => (
                <div key={novel.novel_id} className="flex mb-10 h-[200px]">
                  <div className="flex-shrink-0 mr-4">
                    <Image
                      src={ImagePlaceholder}
                      alt={novel.title}
                      width={150}
                      height={240}
                      className="rounded-lg hover:cursor-pointer"
                      onClick={() => push(`/novels/details/${novel.novel_id}`)}
                    />
                  </div>
                  <div className="text-white flex-1">
                      <div className="text-md font-bold mb-2 hover:underline hover:cursor-pointer"
                      onClick={() => push(`/novels/details/${novel.novel_id}`)}
                      >{novel.title}</div>
                      <p className="text-[11px] hover:underline hover:cursor-pointer"
                      onClick={() => push(`/novels/details/${novel.novel_id}`)}
                      >{novel.synopsis || "No synopsis available"}</p>
                    </div>
                  </div>
                      ))}
          </div>
        </div>
              <div className='hidden sm:block'>
                <div className="grid grid-cols-2 gap-4">
                  {data?.novels?.map((novel: any) => (
                    <div key={novel.novel_id} className="grid grid-cols-2 gap-2">
                      <div className='flex flex-row-reverse mr-2'>
                        <Image
                          src={ImagePlaceholder}
                          alt={novel.title}
                          width={150}
                          height={240}
                          className="rounded-lg hover:cursor-pointer"
                          onClick={() => push(`/novels/details/${novel.novel_id}`)}
                        />
                      </div>
                      <div className="text-white">
                        <div className="text-md font-bold mb-2 hover:underline hover:cursor-pointer"
                         onClick={() => push(`/novels/details/${novel.novel_id}`)}>
                          {novel.title}
                        </div>
                        <p className="text-[11px] hover:underline hover:cursor-pointer"
                         onClick={() => push(`/novels/details/${novel.novel_id}`)}>
                          {novel.synopsis || "No synopsis available"}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            <div className='my-8'>
                <PaginationButton
                        currentPage={data?.current_page}
                        totalPages={data?.total_pages}
                        path={path}
                    />
            </div>
    </div>
  )
}

export default List