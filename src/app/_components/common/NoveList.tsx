'use client'
import React from 'react'
import { useFetchAllGenre } from '../hooks/useFetchAllGenre'
import { Button } from "@/components/ui/button";


const NoveList = () => {
 const {data} = useFetchAllGenre()
 console.log(data)
  return (
    <div className='min-h-screen'>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
        <Button
          onClick={() => alert('You clicked All genres')}
        >
          All
        </Button>
        {data && Array.isArray(data?.novels) && data?.novels?.map((item:any, index:any) => (
          <Button
            key={index}
            onClick={() => alert(`You clicked on ${item.genre}`)}
            >
            {item.genre}
          </Button>
        ))}
      </div>
    </div>
  )
}

export default NoveList