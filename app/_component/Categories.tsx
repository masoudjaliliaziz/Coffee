import { getCategories } from "@/app/_lib/data-service";

import { Category } from "@/app/_lib/serviceTypes";
import FilterProductByCategory from "./FilterProductByCategory";

async function Categories() {
  const data: Category[] = await getCategories();

  return (
    <div className="flex gap-3 justify-center items-center w-full ">
      <div className="form-control w-full flex flex-row justify-around bg-base-300 rounded-lg py-1.5">
        {data.map((categoryData) => (
          <FilterProductByCategory key={categoryData.id} data={categoryData} />
        ))}
      </div>
    </div>
  );
}

export default Categories;
