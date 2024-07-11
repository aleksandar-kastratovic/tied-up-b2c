import { CategoryProducts, SingleCategory } from "@/_components/category";
import { Suspense } from "react";

const CategoryPage = ({
  params: { path },
  searchParams: { sort: sortURL, strana, filteri },
}) => {
  const slug = path[path?.length - 1];
  const sort = (sortURL ?? "_")?.split("_");
  const sortField = sort?.[0];
  const sortDirection = sort?.[1];

  const page = Number(strana) > 0 ? Number(strana) : 1;

  const filters = filteri?.split("::")?.map((filter) => {
    const [column, selected] = filter?.split("=");
    const selectedValues = selected?.split("_");
    return {
      column,
      value: {
        selected: selectedValues,
      },
    };
  });

  return (
    <>
      <Suspense
        fallback={
          <>
            <div className={`w-full h-20 bg-slate-300 animate-pulse mt-10`} />
          </>
        }
      >
        <SingleCategory slug={slug} />
      </Suspense>
      <CategoryProducts
        slug={slug}
        filters={filters}
        strana={page}
        sortField={sortField}
        sortDirection={sortDirection}
        isSection={false}
        allFilters={[]}
      />
    </>
  );
};

export default CategoryPage;
