"use client";
import Link from "next/link";
import { useCategory } from "@/hooks/croonus.hooks";

export const SingleCategory = ({ slug, text }) => {
  const { data } = useCategory({ slug });

  return (
    <>
      <div className="px-5 lg:px-[3rem]">
        {data?.parents?.length > 0 && (
          <div className="flex items-center gap-2 flex-wrap mt-5">
            <Link
              href={`/`}
              className="text-[#191919] text-[0.95rem] font-thin"
            >
              Početna
            </Link>
            <>/</>
            {data?.parents?.map((breadcrumb, index, arr) => {
              return (
                <div key={index} className="flex items-center gap-2">
                  <Link
                    href={`/${breadcrumb?.slug_path}`}
                    className="text-[#191919] text-[0.95rem] font-thin"
                  >
                    {breadcrumb?.name}
                  </Link>
                  {index !== arr.length - 1 && <>/</>}
                </div>
              );
            })}
            <>/</>
            <h1 className="text-[#de6a26] text-[0.95rem] font-semibold">
              {data?.basic_data?.name}
            </h1>
          </div>
        )}
      </div>
      <div className="mt-[30px] md:mt-[80px] flex flex-col items-center justify-center">
        <div className="flex flex-row  items-center justify-center">
          <h1 className="text-[23px] md:text-[29px] font-semibold">
            {data?.basic_data?.name ?? text ?? ""}
          </h1>
        </div>
        <p
          className="text-center text-[0.9rem] max-md:mt-[20px] max-w-[36.075rem] font-thin md:mt-[22px]"
          dangerouslySetInnerHTML={{
            __html: data?.basic_data?.short_description,
          }}
        ></p>
      </div>
    </>
  );
};
