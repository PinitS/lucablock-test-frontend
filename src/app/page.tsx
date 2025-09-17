import Header from "@/components/Header";
import Navigate from "@/components/PreviewPage/Navigate";
import { getProducts } from "@/services/preview/getProducts";
// import ProductOrder from "@/components/PreviewPage/ProductOrder";

export default async function Home() {
  const products = await getProducts();
  return (
    <div className="flex flex-col w-screen h-screen bg-gray-100">
      <Header />
      {/* <Navigate /> */}
      {/* <ProductOrder products={products} /> */}
    </div>
  );
}
