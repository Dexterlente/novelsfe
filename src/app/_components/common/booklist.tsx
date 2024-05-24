"use client";
import React from "react";

interface Props {
  data: any;
  searched?: string;
}

const BookList = ({ data, searched }: Props) => {
  return (
    <>
      {searched && <div>{searched}</div>}
      <div>
        {data?.novels.map?.((books: any, index: number) => (
          <div key={index}>
            <div>a{books.title}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default BookList;
