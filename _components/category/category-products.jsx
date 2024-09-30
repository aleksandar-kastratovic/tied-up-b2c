"use client";
import { useState, useEffect, Suspense } from "react";

import { Thumb } from "@/_components/shared/thumb";
import Filters from "@/components/sections/categories/Filters";
import FiltersMobile from "@/components/sections/categories/FilterMobile";
import { useRouter, useSearchParams } from "next/navigation";
import {
  useCategoryProducts,
  useCategoryFilters,
  useIsMobile,
} from "@/hooks/croonus.hooks";

export const CategoryProducts = ({
  filters,
  strana,
  sortDirection,
  sortField,
  allFilters = [],
  slug,
  isSection,
}) => {
  const router = useRouter();
  const is_mobile = useIsMobile();
  const [productsPerView, setProductsPerView] = useState(is_mobile ? 2 : 4);

  useEffect(() => {
    setProductsPerView(is_mobile ? 2 : 4);
  }, [is_mobile]);

  const params = useSearchParams();
  const [filterOpen, setFilterOpen] = useState(false);
  const [isBeingFiltered, setIsBeingFiltered] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  // params from URL
  const filterKey = params?.get("filteri");
  const pageKey = Number(params?.get("strana"));
  const sortKey = params?.get("sort");

  const [page, setPage] = useState(pageKey ?? 1);

  const [sort, setSort] = useState({
    field: sortField ?? "",
    direction: sortDirection ?? "",
  });

  const [selectedFilters, setSelectedFilters] = useState(filters ?? []);
  const [tempSelectedFilters, setTempSelectedFilters] = useState([]);
  const [availableFilters, setAvailableFilters] = useState(allFilters ?? []);
  const [changeFilters, setChangeFilters] = useState(false);
  const [lastSelectedFilterKey, setLastSelectedFilterKey] = useState("");

  const updateURLQuery = (sort, selectedFilters, page) => {
    let sort_tmp;
    let filters_tmp;
    let page_tmp;

    if (sort?.field !== "" && sort?.direction !== "") {
      sort_tmp = `${sort?.field}_${sort?.direction}`;
    }

    if (selectedFilters?.length > 0) {
      filters_tmp = selectedFilters
        ?.map((filter) => {
          const selectedValues = filter?.value?.selected?.join("_");
          return `${filter?.column}=${selectedValues}`;
        })
        .join("::");
    } else {
      filters_tmp = "";
    }

    if (page > 1) {
      page_tmp = page;
    }

    return { sort_tmp, filters_tmp, page_tmp };
  };

  useEffect(() => {
    const { sort_tmp, filters_tmp, page_tmp } = updateURLQuery(
      sort,
      selectedFilters,
      page
    );

    const generateQueryString = (sort_tmp, filters_tmp, page_tmp) => {
      let queryString = `?${filters_tmp ? `filteri=${filters_tmp}` : ""}${
        filters_tmp && (sort_tmp || page_tmp) ? "&" : ""
      }${sort_tmp ? `sort=${sort_tmp}` : ""}${sort_tmp && page_tmp ? "&" : ""}${
        page_tmp ? `strana=${page_tmp}` : ""
      }`;

      router.push(queryString, { scroll: false });
    };

    generateQueryString(sort_tmp, filters_tmp, page_tmp);
  }, [sort, selectedFilters, page]);

  const { data, error, isError, isFetching, isFetched } = useCategoryProducts({
    slug,
    page: pageKey ?? 1,
    limit: 8,
    sort: sortKey ?? "_",
    setSelectedFilters: setSelectedFilters,
    filterKey: filterKey,
    setSort: setSort,
    render: false,
    setIsLoadingMore: setIsLoadingMore,
    isSection: isSection,
  });

  const mutateFilters = useCategoryFilters({
    slug,
    page,
    limit: 10,
    sort,
    selectedFilters: tempSelectedFilters,
    isSection: isSection,
  });

  useEffect(() => {
    if (filters?.length > 0) {
      mutateFilters.mutate({
        slug,
        selectedFilters: tempSelectedFilters,
        lastSelectedFilterKey,
        setAvailableFilters,
        availableFilters,
      });
    }
  }, []);

  useEffect(() => {
    mutateFilters.mutate({
      slug,
      selectedFilters: tempSelectedFilters,
      lastSelectedFilterKey,
      setAvailableFilters,
      availableFilters,
    });
  }, [tempSelectedFilters?.length]);

  const getPaginationArray = (selectedPage, totalPages) => {
    const start = Math.max(1, selectedPage - 2);
    const end = Math.min(totalPages, start + 4);
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };

  return (
    <>
      <div
        className={`${
          selectedFilters?.length > 0
            ? `mx-[3%] mt-[4.125rem] flex flex-wrap items-center gap-[0.25rem]`
            : `hidden`
        }`}
      >
        {selectedFilters?.map((filter) => {
          const splitFilter = filter?.column?.split("|");
          const filterName = splitFilter?.[1];
          return (
            <div
              className={`font-normal bg-croonus-2  text-white text-[0.65rem] relative max-md:text-[0.7rem]  rounded-lg flex items-center gap-2`}
            >
              <div className={`flex items-center gap-2  px-1`}>
                <h1>
                  {filterName?.charAt(0).toUpperCase() + filterName?.slice(1)}:
                </h1>
                <span>
                  {filter?.value?.selected?.map((item, index, arr) => {
                    const isLastItem = index === arr.length - 1;
                    return `${filterName === "cena" ? item + "RSD" : item}${
                      isLastItem ? "" : ","
                    }`;
                  })}
                </span>
              </div>
              <div
                onClick={() => {
                  const newSelectedFilters = tempSelectedFilters.filter(
                    (item) => item.column !== filter.column
                  );
                  setTempSelectedFilters(newSelectedFilters);
                  setSelectedFilters(newSelectedFilters);
                  setChangeFilters(true);
                  if (tempSelectedFilters.length === 1) {
                    window.history.replaceState(
                      null,
                      "",
                      singleCategory
                        ? `/kategorije/${singleCategory.slug_path}`
                        : `/sekcija/${slug}`
                    );
                  }
                }}
                className={`bg-croonus-2 cursor-pointer  self-stretch h-full flex-1 right-0  rounded-r-lg flex items-center flex-col justify-center`}
              >
                <i
                  className={`fa fa-solid  fa-trash text-[0.65rem] text-white cursor-pointer py-[0.35rem] px-1 hover:text-red-500`}
                  onClick={() => {
                    const newSelectedFilters = tempSelectedFilters.filter(
                      (item) => item.column !== filter.column
                    );
                    setSelectedFilters(newSelectedFilters);
                    setChangeFilters(true);
                    setIsBeingFiltered(true);
                    if (tempSelectedFilters.length === 1) {
                      window.history.replaceState(
                        null,
                        "",
                        singleCategory
                          ? `/kategorije/${singleCategory.slug_path}`
                          : `/sekcija/${slug}`
                      );
                    }
                  }}
                ></i>
              </div>
            </div>
          );
        })}
      </div>
      <div className="max-md:hidden mt-[67px]">
        <Filters
          selectedFilters={selectedFilters}
          availableFilters={availableFilters}
          setSelectedFilters={setSelectedFilters}
          sort={sort}
          setPage={setPage}
          setSort={setSort}
          changeFilters={changeFilters}
          pagination={data?.pagination}
          setProductsPerView={setProductsPerView}
          productsPerView={productsPerView}
          setTempSelectedFilters={setTempSelectedFilters}
          setLastSelectedFilterKey={setLastSelectedFilterKey}
          setChangeFilters={setChangeFilters}
        />
      </div>
      <div
        className={`flex items-center gap-5 w-full px-2 mx-auto mt-[60px] md:hidden bg-white sticky top-[3.4rem] py-2 z-[51]`}
      >
        <button
          className={`flex items-center justify-center text-[0.9rem] md:text-[1.2rem] text-center py-2 flex-1 border`}
          onClick={() => setFilterOpen(true)}
        >
          Filteri
        </button>
        <div className={`flex items-center gap-3`}>
          {/*a div 40px high and 40px wide*/}
          <div
            className={`w-[30px] h-[30px] border-2 ${
              productsPerView === 1 && "border-black"
            }`}
            onClick={() => setProductsPerView(1)}
          ></div>
          {/*a div 40px high and 40px wide that has 9 smaller squares inside*/}
          <div
            className={`w-[30px] h-[30px] border grid grid-cols-2 ${
              productsPerView === 2 && "border-black"
            }`}
            onClick={() => setProductsPerView(2)}
          >
            {Array.from({ length: 4 }, (_, i) => {
              return (
                <div
                  key={i}
                  className={`col-span-1 border ${
                    productsPerView === 2 && "border-black"
                  }`}
                ></div>
              );
            })}
          </div>
        </div>
      </div>

      <div
        className={`mt-[1.875rem] px-2 md:px-[3rem] ${
          productsPerView === 2 && "md:!w-[calc(50%+8rem)] mx-auto"
        } grid grid-cols-${productsPerView} gap-x-5 gap-y-10`}
      >
        {data?.items?.map(({ id }) => {
          return (
            <Suspense
              key={id}
              fallback={
                <div
                  className={`aspect-2/3 w-full h-full bg-slate-200 animate-pulse`}
                />
              }
            >
              <Thumb
                key={id}
                id={id}
                categoryId={slug}
                refreshWishlist={() => {}}
              />
            </Suspense>
          );
        })}
      </div>
      {data?.pagination?.total_pages > 1 && (
        <div
          className={`flex mt-10 py-2 px-[3rem] bg-[#f2f2f2] items-center justify-end gap-1`}
        >
          {getPaginationArray(
            data.pagination.selected_page,
            data.pagination.total_pages
          ).map((num, index, array) => (
            <>
              {index === 0 && num !== 1 && (
                <>
                  <span
                    className={`cursor-pointer select-none py-1 px-3 border border-white hover:border-[#04b400] hover:text-[#04b400] rounded-lg`}
                    onClick={() => {
                      setPage(1);
                      window.scrollTo(0, 0);
                    }}
                  >
                    1
                  </span>
                  {num - 1 !== 1 && (
                    <span className={`select-none py-1 px-3 rounded-lg`}>
                      ...
                    </span>
                  )}
                </>
              )}
              {index > 0 && num - array[index - 1] > 1 && (
                <span className={`select-none py-1 px-3 rounded-lg`}>...</span>
              )}
              <span
                className={`${
                  num === data.pagination.selected_page
                    ? "cursor-pointer select-none bg-[#04b400] py-1 px-3 rounded-lg text-white"
                    : "cursor-pointer select-none py-1 px-3 border border-white hover:border-[#04b400] hover:text-[#04b400] rounded-lg"
                }`}
                onClick={() => {
                  setPage(num);
                  window.scrollTo(0, 0);
                }}
              >
                {num}
              </span>
              {index === array.length - 1 &&
                num !== data.pagination.total_pages && (
                  <>
                    {data.pagination.total_pages - num !== 1 && (
                      <span className={`select-none py-1 px-3  rounded-lg`}>
                        ...
                      </span>
                    )}
                    <span
                      className={`cursor-pointer select-none py-1 px-3 border border-white hover:border-[#04b400] hover:text-[#04b400] rounded-lg`}
                      onClick={() => {
                        setPage(data.pagination.total_pages);
                        window.scrollTo(0, 0);
                        setLoading(true);
                      }}
                    >
                      {data.pagination.total_pages}
                    </span>
                  </>
                )}
            </>
          ))}
        </div>
      )}
      <div
        className={
          filterOpen
            ? `fixed top-0 left-0 w-full h-[100dvh] z-[3000] bg-white translate-x-0 duration-500`
            : `fixed top-0 left-0 w-full h-[100dvh] z-[3000] bg-white -translate-x-full duration-500`
        }
      >
        <FiltersMobile
          selectedFilters={selectedFilters}
          availableFilters={availableFilters}
          setSelectedFilters={setSelectedFilters}
          sort={sort}
          setPage={setPage}
          setSort={setSort}
          changeFilters={changeFilters}
          pagination={data?.pagination}
          setProductsPerView={setProductsPerView}
          productsPerView={productsPerView}
          setFilterOpen={setFilterOpen}
          setTempSelectedFilters={setTempSelectedFilters}
          setChangeFilters={setChangeFilters}
          tempSelectedFilters={tempSelectedFilters}
          setLastSelectedFilterKey={setLastSelectedFilterKey}
        />
      </div>
    </>
  );
};
