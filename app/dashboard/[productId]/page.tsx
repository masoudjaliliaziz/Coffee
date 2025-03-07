import OrderForm from "@/app/_component/form/OrderForm";
import { getProductById } from "@/app/_lib/data-service";
import { Product } from "@/app/_lib/serviceTypes";
import { StarIcon } from "@heroicons/react/16/solid";
import { HeartIcon } from "@heroicons/react/24/outline";

import Image from "next/image";

async function page({ params }) {
  const { productId } = params;

  const curProduct = await getProductById(productId);
  const product: Product = curProduct?.[0];
  return (
    <div className="pb-[80px] flex flex-col w-full h-full">
      <div className="productImage h-[45%] w-full bg-base-300 relative rounded-md overflow-hidden">
        <Image
          src={"/slide1.jpeg"}
          alt="productImage"
          fill
          className="object-cover rounded-md"
        />
      </div>
      <div className="productTitle h-[65%] w-full ">
        <div className="h-1/4  w-full flex flex-col px-6  py-3 afrer:border after:border-b-2 after:border-base-300">
          <div className="flex flex-row justify-between items-start">
            <h1 className=" text-3xl font-black">{product?.name}</h1>
            <HeartIcon width={30} height={30} className="" />
          </div>
          <div className="w-full h-1/2 flex items-center gap-2">
            <h1 className="w-1/6 text-xs flex justify-center items-center h-5 bg-base-300 rounded-lg">
              ۵.۱۳۷ فروش
            </h1>
            <StarIcon width={17} height={17} />
            <p className="text-xs"> ۵ (از ۵.۱۳۷ نظر)</p>
          </div>
        </div>
        <div className="h-2/4 w-full  afrer:border after:border-b-2 after:border-base-300">
          <div className="w-full min-h-1/4  flex flex-col gap-0.5 px-6 ">
            <h1 className="text-lg font-bold"> مشخصات</h1>
            <p className="text-xs ">{product?.description}</p>
          </div>
          <div className="h-2/4 w-full px-6">
            <OrderForm product={product} />
          </div>
        </div>
        <div className="h-1/4 "></div>
      </div>
    </div>
  );
}

export default page;
