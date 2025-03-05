"use client";

import { Product } from "@/app/_lib/serviceTypes";
import { useState } from "react";

type Props = {
  product: Product;
};

function OrderForm({ product }: Props) {
  const [roast, setRoast] = useState("");
  const [counter, setCounter] = useState(1);
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
    { title: "موکاپات", value: "moko" },
    { title: "دستگاه صنعتی", value: "main" },
  ];
  return (
    <form className="w-full h-full  py-6 flex flex-col gap-1.5 ">
      <div className="flex min-h-2/3   w-full py-2 justify-start gap-6 bg-base-200 rounded-md  ">
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
      <div className="flex   w-full py-2 justify-start gap-6 bg-base-200 rounded-md   ">
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
      <div className="divider"></div>
      <div className="w-full min-h-1/3  flex items-center justify-between ">
        <div className="w-1/3 h-full  flex gap-3 items-center">
          <h1 className="font-bold text-xs">تعداد</h1>
          <div className="flex justify-center items-center gap-1 bg-base-300 px-3 py-1 rounded-lg">
            <div
              className="cursor-pointer p-0.5 bg-base-300  rounded-md w-4 h-4 flex justify-center items-center"
              onClick={() => setCounter((cur) => cur + 1)}
            >
              +
            </div>
            <div className=" text-sm font-black">{counter}</div>
            <div
              className="cursor-pointer p-0.5 bg-base-300  rounded-md w-4 h-4 flex justify-center items-center"
              onClick={() =>
                setCounter((cur) => (cur === 1 ? (cur = 1) : cur - 1))
              }
            >
              -
            </div>
          </div>
        </div>
        <div className=" w-1/3 h-full  items-center flex gap-2">
          <h1 className="text-xs font-semibold">قیمت نهایی</h1>
          <div className="text-xs font-bold flex gap-3 px-1.5 py-1 rounded-lg bg-base-300">
            {product.price * counter}هزار تومن
          </div>
        </div>
      </div>
      <button className="w-3/4 bg-neutral px-3 py-2 flex justify-center items-center h-full text-base-100 rounded-lg text-sm mx-auto mb-6 mt-3">
        افزودن به سبد خرید
      </button>
    </form>
  );
}

export default OrderForm;
