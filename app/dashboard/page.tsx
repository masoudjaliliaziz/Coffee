import SearchInput from "../_component/mobile/SearchInput";
import Slider from "../_component/Slider";

function page() {
  return (
    <div className="flex flex-col justify-center items-center gap-3 px-6">
      <SearchInput />
      <Slider />
    </div>
  );
}

export default page;
