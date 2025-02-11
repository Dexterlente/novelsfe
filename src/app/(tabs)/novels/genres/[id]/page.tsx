import type { Metadata } from "next";
import FullScreenAdhoc from '@/app/_adhoc/fullscreenadhoc'
import NoveList from '@/app/_components/common/NoveList'
import React from 'react'
import { GENRE_SEO } from "@/app/_seo/seo_config";

export const metadata: Metadata = {
  title: GENRE_SEO.TITLE,
  description: GENRE_SEO.DESCRIPTION,
};

const page = () => {
  return (
    <FullScreenAdhoc>
        <NoveList />
    </FullScreenAdhoc>
  )
}

export default page