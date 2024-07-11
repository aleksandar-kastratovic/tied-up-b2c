import { Suspense } from "react";
import ProductPage from "@/components/ProductDetails/ProductPage";
import Loader from "@/components/Loader";

const ProductDetailPage = async ({ params: { path } }) => {
  return (
    <Suspense fallback={<Loader />}>
      <ProductPage
        path={path?.[path?.length - 1]}
        categoryId={path?.[path?.length - 2] ?? "*"}
      />
    </Suspense>
  );
};

export default ProductDetailPage;
