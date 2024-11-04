"use client";

import Link from "next/link";

export const Pagination = ({ data, page, setPage, generateQueryString }) => {
  let query_string = generateQueryString();

  const handleQueryString = (page) => {
    let new_string = query_string;
    let page_string = query_string?.split("strana=")?.[1];

    if (page_string) {
      new_string = query_string?.replace(
        `strana=${page_string}`,
        `strana=${page + 1}`
      );
    }

    if (!page_string) {
      new_string = `${query_string}&strana=${page + 1}`;
    }
    return new_string;
  };

  const getPaginationArray = (selectedPage, totalPages) => {
    const start = Math.max(1, selectedPage - 2);
    const end = Math.min(totalPages, start + 4);
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };

  return (
    <div
      className={`flex mt-10 py-2 px-[3rem] bg-[#f2f2f2] items-center justify-end gap-1`}
    >
      {getPaginationArray(
        data?.pagination?.selected_page,
        data?.pagination?.total_pages
      ).map((num, index, array) => (
        <>
          {index === 0 && num !== 1 && (
            <>
              <Link
                href={`${handleQueryString(0)}`}
                className={`cursor-pointer select-none py-1 px-3 border border-white hover:border-[#215352] hover:text-[#215352] rounded-lg`}
                onClick={() => {
                  setPage(1);
                  window.scrollTo(0, 0);
                }}
              >
                1
              </Link>
              {num - 1 !== 1 && (
                <span className={`select-none py-1 px-3 rounded-lg`}>...</span>
              )}
            </>
          )}
          {index > 0 && num - array[index - 1] > 1 && (
            <span className={`select-none py-1 px-3 rounded-lg`}>...</span>
          )}
          <Link
            href={`${handleQueryString(num - 1)}`}
            className={`${
              num === data?.pagination?.selected_page
                ? "cursor-pointer select-none bg-[#215352] py-1 px-3 rounded-lg text-white"
                : "cursor-pointer select-none py-1 px-3 border border-white hover:border-[#215352] hover:text-[#215352] rounded-lg"
            }`}
            onClick={() => {
              setPage(num);
              window.scrollTo(0, 0);
            }}
          >
            {num}
          </Link>
          {index === array.length - 1 &&
            num !== data?.pagination?.total_pages && (
              <>
                {data?.pagination?.total_pages - num !== 1 && (
                  <span className={`select-none py-1 px-3  rounded-lg`}>
                    ...
                  </span>
                )}
                <Link
                  href={`${handleQueryString(
                    data?.pagination?.total_pages - 1
                  )}`}
                  className={`cursor-pointer select-none py-1 px-3 border border-white hover:border-[#215352] hover:text-[#215352] rounded-lg`}
                  onClick={() => {
                    setPage(data?.pagination?.total_pages);
                    window.scrollTo(0, 0);
                  }}
                >
                  {data?.pagination?.total_pages}
                </Link>
              </>
            )}
        </>
      ))}
    </div>
  );
};
