import { get, list } from "@/app/api/api";
import ProductDetails from "@/components/ProductDetails/ProductDetails";
import ProductMobileDetails from "../ProductMobileDetails/ProductMobileDetails";
import { headers } from "next/headers";

const getProduct = (slug) => {
  return get(`/product-details/basic-data/${slug}`).then((res) => res?.payload);
};

const getProductGallery = (slug) => {
  return get(`/product-details/gallery/${slug}`).then(
    (res) => res?.payload?.gallery
  );
};
const getProductStickers = (slug) => {
  return get(`/product-details/gallery/${slug}`).then(
    (res) => res?.payload?.stickers
  );
};

const getProductLongDescription = (slug) => {
  return get(`/product-details/description/${slug}`).then(
    (res) => res?.payload
  );
};

const getBreadcrumbs = (slug, categoryId) => {
  return get(
    `/product-details/breadcrumbs/${slug}?categoryId=${categoryId}`
  ).then((res) => res?.payload);
};

const getSpecification = (slug) => {
  return get(`/product-details/specification/${slug}`).then(
    (res) => res?.payload
  );
};

const getDeclaration = (slug) => {
  return get(`/product-details/declaration/${slug}`).then(
    (res) => res?.payload
  );
};
const upsellProductsList = (id) => {
  return list(`/product-details/up-sell/${id}`).then(
    (response) => response?.payload?.items
  );
};
const relatedProductsList = (id) => {
  return list(`/product-details/recommended/${id}`).then(
    (response) => response?.payload?.items
  );
};

const crosssellProductsList = async (id) => {
  return await list(`/product-details/cross-sell/${id}`).then(
    (response) => response?.payload?.items
  );
};

const ProductPage = async ({ path, categoryId }) => {
  const [
    product,
    productGallery,
    desc,
    breadcrumbs,
    specification,
    declaration,
    relatedProducts,
    upsellProducts,
    crosssellProducts,
    stickers,
  ] = await Promise.all([
    getProduct(path),
    getProductGallery(path),
    getProductLongDescription(path),
    getBreadcrumbs(path, categoryId),
    getSpecification(path),
    getDeclaration(path),
    relatedProductsList(path),
    upsellProductsList(path),
    crosssellProductsList(path),
    getProductStickers(path),
  ]);

  const canonical = headers()?.get("x-pathname");

  return (
    <div className="">
      <ProductDetails
        product={product}
        productGallery={productGallery}
        desc={desc}
        path={path}
        breadcrumbs={breadcrumbs}
        specification={specification}
        declaration={declaration}
        relatedProducts={relatedProducts}
        upsellProducts={upsellProducts}
        crosssellProducts={crosssellProducts}
        stickers={stickers}
        canonical={canonical}
      />
    </div>
  );
};

export default ProductPage;
