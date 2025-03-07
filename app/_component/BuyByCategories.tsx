import { Suspense } from "react";
import VerticalDivider from "./VerticalDivider";
import Categories from "./Categories";

function BuyByCategories() {
  return (
    <>
      {/* <VerticalDivider text="خرید بر اساس نوع قهوه" /> */}
      <div className="flex w-full  gap-3">
        <Suspense
          fallback={
            <div className="w-full flex justify-center items-center">
              {" "}
              <span className="loading loading-lg loading-spinner text-primary "></span>
            </div>
          }
        >
          <Categories />
        </Suspense>
      </div>
    </>
  );
}

export default BuyByCategories;
