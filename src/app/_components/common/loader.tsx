'use client'
import React from 'react'
import Image from "next/image";

const ImageSpinner = "/loadd.png"
const ImageLogo = "/logoo.png"

const Loader = () => {
  return (
    <>
      <div className='hidden sm:block animate-blink'>
          <div
          className='min-h-[calc(100vh-164.062px)] flex items-center justify-center relative'>
                  <div className='w-400px h-400px '>
                      <Image
                                      src={ImageSpinner}
                                      alt="loading"
                                      width={320}
                                      height={320}
                                      className="rounded-full slow-spin"
                                      />
                  </div>
                  <div className='w-100px h-100px z-10  rounded-full absolute'>
                      <Image
                                      src={ImageLogo}
                                      alt="loading"
                                      width={120}
                                      height={120}
                                      className="rounded-full"
                                      />
              </div>
          </div>
      </div>
      <div className='block sm:hidden animate-blink'>
          <div
          className='h-[calc(100vh-153.375px)] flex items-center justify-center relative'>
                  <div className='w-400px h-400px '>
                      <Image
                                      src={ImageSpinner}
                                      alt="loading"
                                      width={220}
                                      height={220}
                                      className="rounded-full slow-spin"
                                      />
                  </div>
                  <div className='w-150px h-150px z-10 absolute'>
                      <Image
                                      src={ImageLogo}
                                      alt="loading"
                                      width={75}
                                      height={75}
                                      className="rounded-full"
                                      />
              </div>
          </div>
      </div>
    </>
  )
}

export default Loader