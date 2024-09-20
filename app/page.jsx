import IndexSlider from "@/components/IndexSlider/IndexSlider";
import { get, list } from "./api/api";
import RecommendedCategories from "@/components/sections/homepage/RecommendedCategories";
import NewCategoriesSections from "@/components/NewCategoriesSection/NewCategoriesSection";
import NewsLetterInstagramSection from "@/components/NewsLetterInstgramSection/NewsLetterInstagramSection";
import RecommendedProducts from "@/components/sections/homepage/RecommendedProducts";
import AboutUs from "@/components/Aboutus/Aboutus";

const getBanners = async () => {
  return await get("/banners/index_slider").then((res) => res?.payload);
};

const getMobileBanners = async () => {
  return await get("/banners/index_slider_mobile").then((res) => res?.payload);
};

const getBannersCategories = async () => {
  return await get("/banners/index-first-banner").then((res) => res?.payload);
};

const getRecommendedProducts = async () => {
  return await list("/products/section/list/recommendation").then(
    (res) => res?.payload?.items
  );
};
const getIndexBanner = async () => {
  return await get("/banners/index_banner").then((res) => res?.payload);
};

const fetchAction4 = async () => {
  return await get("/banners/akcija4").then((response) => response?.payload);
};

const getNew = async () => {
  return await list("/categories/section/recommended").then(
    (res) => res?.payload
  );
};

const Home = async () => {
  const banners = await getBanners();
  const recommendedProducts = await getRecommendedProducts();
  const action4 = await fetchAction4();
  const categories = await getBannersCategories();
  const mobileBanners = await getMobileBanners();
  const recommendedCategories = await getNew();
  return (
    <>
      <div className="block relative overflow-hidden">
        <div className="relative block" id="slider">
          <IndexSlider banners={banners} mobileBanners={mobileBanners} />
        </div>
        <div className="overflow-hidden">
          <RecommendedProducts
            recommendedProducts={recommendedProducts}
            action4={`Preporučujemo`}
          />
        </div>
        <AboutUs />
        <RecommendedCategories categories={categories} />
        <NewCategoriesSections categories={recommendedCategories} />
        <NewsLetterInstagramSection />
      </div>
    </>
  );
};

export default Home;
export const revalidate = 30;
