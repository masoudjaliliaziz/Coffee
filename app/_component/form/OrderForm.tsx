"use client";

import { Product } from "@/app/_lib/serviceTypes";
import { useState } from "react";

type Props = {
  product: Product;
};

function OrderForm({ product }: Props) {
  const [roast, setRoast] = useState("");
  console.log(roast);
  const roastData = [
    { title: "لایت", value: "light" },
    { title: "مدیوم", value: "medium" },
    { title: "دارک", value: "dark" },
  ];
  const wightData = [
    { title: "۲۵۰ گرم", value: "250" },
    { title: "۵۰۰ گرم", value: "500" },
    { title: "۷۵۰ گرم", value: "750" },
    { title: " ۱ کیلوگرم", value: "1000" },
  ];
  const machineData = [
    { title: "دستگاه خانگی", value: "home" },
    { title: "فرنج پرس", value: "french" },
    { title: "موکوپات", value: "moko" },
    { title: "دستگاه صنعتی", value: "main" },
  ];
  return (
    <form className="w-full h-full  py-6 flex flex-col gap-1.5 ">
      <div className="flex   w-full py-2 justify-start gap-6 bg-base-200 rounded-md  ">
        <h1 className="text-xs font-bold rounded-md  p-1 badge badge-neutral w-1/6  ">
          میزان رست
        </h1>
        <div className="flex justify-start items-center gap-5">
          {roastData.map((data) => (
            <div
              className="border-2 border-neutral-content  text-xs font-semibold p-1 rounded-md "
              key={data.value}
            >
              {data.title}
            </div>
          ))}
        </div>
      </div>
      <div className="flex   w-full py-2 justify-start gap-6 bg-base-200 rounded-md">
        <h1 className="text-xs font-bold rounded-md  p-1 badge badge-neutral w-1/6 ">
          {" "}
          وزن محصول
        </h1>
        <div className="flex justify-start items-center gap-5">
          {wightData.map((data) => (
            <div
              className="border-2 border-neutral-content  text-xs font-semibold p-1 rounded-md "
              key={data.value}
            >
              {data.title}
            </div>
          ))}
        </div>
      </div>{" "}
      <div className="flex   w-full py-2 justify-start gap-6 bg-base-200 rounded-md">
        <h1 className="text-xs font-bold rounded-md  p-1 badge badge-neutral w-1/6 ">
          {" "}
          نوع دم
        </h1>
        <div className="flex justify-start items-center gap-5">
          {machineData.map((data) => (
            <div
              className="border-2 border-neutral-content  text-xs font-semibold p-1 rounded-md "
              key={data.value}
            >
              {data.title}
            </div>
          ))}
        </div>
      </div>
    </form>
  );
}

export default OrderForm;
