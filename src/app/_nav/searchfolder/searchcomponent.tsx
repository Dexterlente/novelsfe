"use client";
import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { useRouter } from "next/navigation";

function SearchComponent() {
  const [title, setTitle] = useState("");
  const [searching, setSearching] = useState(false);
  const router = useRouter();

  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (title.trim() !== "") {
      router.replace(`/search?query=${title}`);
      setSearching((e) => !e);
    }
  };

  const handleClick = () => {
    setSearching((e) => !e);
    setTitle("");
  };

  return (
    <>
      <div>
        <div className="flex">
          {searching && (
            <div className="flex mt-[3px]">
              <div>
                <form onSubmit={handleSubmit}>
                  <input
                    className="border-2 rounded-full pb-1 p-[2px] focus:outline-none focus:border-transparent"
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder=" Search here....."
                    style={{
                      padding: "2px",
                      paddingLeft: "10px",
                      borderColor: "none !important",
                    }}
                  />
                  <button
                    className="text-[12px] rounded-full bg-[#e3e3e3] ml-1 mr-2 text-black p-[7px]"
                    type="submit"
                  >
                    GO
                  </button>
                </form>
              </div>
              <div className="flex items-center justify-center">
                <IoSearch
                  onClick={handleClick}
                  size={25}
                  style={{ cursor: "pointer" }}
                  color="white"
                />
              </div>
            </div>
          )}
        </div>
        {!searching && (
          <div className="mt-[3px]">
            <IoSearch
              onClick={handleClick}
              size={25}
              style={{ cursor: "pointer" }}
              color="white"
            />
          </div>
        )}
      </div>
    </>
  );
}

export default SearchComponent;
