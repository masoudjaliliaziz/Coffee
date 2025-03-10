import { Suspense } from "react";
import BuyByCategories from "../_component/BuyByCategories";
import SearchInput from "../_component/mobile/SearchInput";
import Products from "../_component/Products";
import Slider from "../_component/Slider";
import Spinner from "../_component/Spinner";

function page({ searchParams }: { searchParams: { type?: string } }) {
  const type = searchParams.type ?? "all";

  return (
    <div className="flex flex-col justify-center items-center gap-3 px-6 main">
      <SearchInput />
      <Slider />
      <BuyByCategories />
      <Suspense key={type} fallback={<Spinner />}>
        <Products type={type} />
      </Suspense>
    </div>
  );
}

export default page;
