import BuyByCategories from "../_component/BuyByCategories";
import SearchInput from "../_component/mobile/SearchInput";
import Products from "../_component/Products";
import Slider from "../_component/Slider";

function page({ searchParams }: { searchParams: { type?: string } }) {
  const type = searchParams.type || "";
  return (
    <div className="flex flex-col justify-center items-center gap-3 px-6 main">
      <SearchInput />
      <Slider />
      <BuyByCategories />
      <Products type={type} key={type} />
    </div>
  );
}

export default page;
