import React from 'react'
import { useRouter } from "next/navigation";
import Image from "next/image";

const imageHeader = '/header.png'

const NavHeader = () => {
    const { push } = useRouter();
  return (
    <div className='text-center pt-3 pb-6 bg-[#2E2E2E] flex justify-center'>
        <div
        className="cursor-pointer w-[250px] sm:w-[300px]"
        onClick={() => push("/")}
    >
          <Image
                    src={imageHeader} 
                    alt="bookImage"
                    width={300}
                    height={500}
                  />
    </div>
  </div>
  )
}

export default NavHeader