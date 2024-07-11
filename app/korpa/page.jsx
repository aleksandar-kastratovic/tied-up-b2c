import CheckoutPage from "@/components/CheckoutPage/CheckoutPage";
import { get, list } from "../api/api";
const paymentOptions = async () => {
  const paymentOptions = await get("/checkout/payment-options").then(
    (response) => response?.payload
  );
  return paymentOptions;
};
const deliveryOptions = async () => {
  const deliveryOptions = await get("/checkout/delivery-options").then(
    (response) => response?.payload
  );
  return deliveryOptions;
};

const getRecommendedProducts = async () => {
  return await list("/products/section/list/recommendation").then(
    (res) => res?.payload?.items
  );
};

const getCountries = async () => {
  return await get(`/checkout/ddl/id_country`).then((res) => res?.payload);
};

export const metadata = () => {
  return {
    title: "Korpa | TiedUp",
    description: "Dobrodošli na TiedUp Online Shop",
    keywords: [
      "TiedUp",
      "online",
      "shop",
      "TiedUp.com",
      "farmerke",
      "trenerke",
      "dukserice",
      "TiedUp obuca",
      "obuca",
      "TiedUp online",
    ],
  };
};

const Cart = async () => {
  const paymentoptions = await paymentOptions();
  const deliveryoptions = await deliveryOptions();
  const recommendedProducts = await getRecommendedProducts();
  const countries = await getCountries();
  return (
    <div className="">
      <CheckoutPage
        paymentoptions={paymentoptions}
        deliveryoptions={deliveryoptions}
        recommendedProducts={recommendedProducts}
        countries={countries}
      />
    </div>
  );
};

export default Cart;

export const revalidate = 30;
