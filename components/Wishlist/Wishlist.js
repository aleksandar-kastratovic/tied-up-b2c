"use client";

import { list } from "@/app/api/api";
import { Suspense, useEffect, useState } from "react";
import { useCartContext } from "@/app/api/cartContext";
import WishlistItems from "../WishlistItems/WishlistItems";
import Link from "next/link";
import { Thumb } from "@/_components/shared";
import { useWishlist } from "@/hooks/croonus.hooks";

const WishlistPage = () => {
  const { data, isLoading: loading, refetch } = useWishlist();

  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center h-[200px]">
          <p>Loading wishlist items...</p>
        </div>
      ) : data?.length > 0 ? (
        <div className="mt-5 mx-[0.625rem] grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-5 xl:grid-cols-3 3xl:grid-cols-4">
          {(data ?? [])?.map(({ id_product }) => (
            <Suspense
              key={`wishlist-${id_product}`}
              fallback={<p>Loading...</p>}
            >
              <Thumb
                id={id_product}
                refreshWishlist={refetch}
                categoryId={"*"}
              />
            </Suspense>
          ))}
        </div>
      ) : (
        <div className="mt-[1.2rem] max-sm:w-[95%] mx-auto lg:mt-[15rem] flex flex-col items-center justify-center py-5 text-center">
          <div className="rounded-lg border p-10">
            <h1 className="text-lg font-medium">Vaša lista želja je prazna!</h1>{" "}
            <p>Kada dodate artikle u listu želja, oni će se pojaviti ovde.</p>
            <Link href="/">
              <button className="bg-[#df6a25] mt-10 px-10 font-medium text-white hover:bg-opacity-80 py-4">
                Vrati se na početnu stranu
              </button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default WishlistPage;
