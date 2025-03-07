"use client";

import { Product } from "@/app/_lib/serviceTypes";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/global_state/hook";
import { addToCart } from "@/global_state/cardSlice";
import { RootState } from "@/global_state/store";
import toast from "react-hot-toast";

type Props = {
  product: Product;
};

function OrderForm({ product }: Props) {
  const [roast, setRoast] = useState("");
  const [weight, setWeight] = useState("1000"); // پیش‌فرض 1 کیلوگرم
  const [machine, setMachine] = useState("");
  const [counter, setCounter] = useState(1);
  const dispatch = useAppDispatch();
  const store = useAppSelector((state: RootState) => state.card);
  console.log(store);
  const roastData = [
    { title: "لایت", value: "light" },
    { title: "مدیوم", value: "medium" },
    { title: "دارک", value: "dark" },
  ];
  const weightData = [
    { title: "۲۵۰ گرم", value: "250" },
    { title: "۵۰۰ گرم", value: "500" },
    { title: "۷۵۰ گرم", value: "750" },
    { title: "۱ کیلوگرم", value: "1000" },
  ];
  const machineData = [
    { title: "دستگاه خانگی", value: "home" },
    { title: "فرنج پرس", value: "french" },
    { title: "موکاپات", value: "moko" },
    { title: "دستگاه صنعتی", value: "main" },
  ];

  // تابع برای محاسبه قیمت بر اساس وزن
  const calculatePrice = (weight: number) => {
    // قیمت برای 1 کیلوگرم است، بنابراین اگر وزن کمتر از 1 کیلوگرم باشد، باید قیمت کاهش یابد
    return (product.price * weight) / 1000;
  };

  // تابع برای ارسال محصول به سبد خرید
  const handleAddToCart = () => {
    if (!roast || !weight || !machine) {
      alert("لطفا تمام فیلدها را پر کنید.");
      return;
    }

    const price = calculatePrice(Number(weight)) * counter; // محاسبه قیمت بر اساس وزن و تعداد

    dispatch(
      addToCart({
        product,
        quantity: counter,
        price,
        roast,
        weight,
        machine,
      })
    );
    setCounter(1);
    setMachine("");
    setRoast("");
    setWeight("1000");
    toast.success("محصول با موفقیت به سبد خرید اضافه شد");
  };

  return (
    <form className="w-full h-full py-6 flex flex-col gap-1.5 ">
      {/* رست */}
      <div className="flex min-h-2/3 w-full py-2 justify-start gap-6 bg-base-200 rounded-md">
        <h1 className="text-xs font-bold rounded-md p-1 badge badge-neutral w-1/6">
          میزان رست
        </h1>
        <div className="flex justify-start items-center gap-5">
          {roastData.map((data) => (
            <div
              className={`border-2 border-neutral-content text-xs font-semibold p-1 rounded-md cursor-pointer ${
                roast === data.value ? "bg-primary " : ""
              } `}
              key={data.value}
              onClick={() => setRoast(data.value)}
            >
              {data.title}
            </div>
          ))}
        </div>
      </div>

      {/* وزن */}
      <div className="flex w-full py-2 justify-start gap-6 bg-base-200 rounded-md">
        <h1 className="text-xs font-bold rounded-md p-1 badge badge-neutral w-1/6">
          وزن محصول
        </h1>
        <div className="flex justify-start items-center gap-5">
          {weightData.map((data) => (
            <div
              className={`border-2 border-neutral-content text-xs font-semibold p-1 rounded-md cursor-pointer ${
                weight === data.value ? "bg-primary " : ""
              }`}
              key={data.value}
              onClick={() => setWeight(data.value)}
            >
              {data.title}
            </div>
          ))}
        </div>
      </div>

      {/* نوع دم */}
      <div className="flex w-full py-2 justify-start gap-6 bg-base-200 rounded-md">
        <h1 className="text-xs font-bold rounded-md p-1 badge badge-neutral w-1/6">
          نوع دم
        </h1>
        <div className="flex justify-start items-center gap-5">
          {machineData.map((data) => (
            <div
              className={`border-2 border-neutral-content text-xs font-semibold p-1 rounded-md cursor-pointer ${
                machine === data.value ? "bg-primary " : ""
              }`}
              key={data.value}
              onClick={() => setMachine(data.value)}
            >
              {data.title}
            </div>
          ))}
        </div>
      </div>

      <div className="divider"></div>

      {/* تعداد و قیمت نهایی */}
      <div className="w-full min-h-1/3 flex items-center justify-between">
        <div className="w-1/3 h-full flex gap-3 items-center">
          <h1 className="font-bold text-xs">تعداد</h1>
          <div className="flex justify-center items-center gap-1 bg-base-300 px-3 py-1 rounded-lg">
            <div
              className="cursor-pointer p-0.5 bg-base-300 rounded-md w-4 h-4 flex justify-center items-center"
              onClick={() => setCounter((cur) => cur + 1)}
            >
              +
            </div>
            <div className="text-sm font-black">{counter}</div>
            <div
              className="cursor-pointer p-0.5 bg-base-300 rounded-md w-4 h-4 flex justify-center items-center"
              onClick={() => setCounter((cur) => (cur === 1 ? 1 : cur - 1))}
            >
              -
            </div>
          </div>
        </div>

        <div className="w-1/3 h-full items-center flex gap-2">
          <h1 className="text-xs font-semibold">قیمت نهایی</h1>
          <div className="text-xs font-bold flex gap-3 px-1.5 py-1 rounded-lg bg-base-300">
            {calculatePrice(Number(weight)) * counter} هزار تومن
          </div>
        </div>
      </div>

      {/* دکمه افزودن به سبد خرید */}
      <button
        type="button"
        onClick={handleAddToCart}
        className="w-3/4 bg-neutral px-3 py-2 flex justify-center items-center h-full cursor-pointer rounded-lg text-sm mx-auto mb-6 mt-3 hover:bg-primary"
      >
        افزودن به سبد خرید
      </button>
    </form>
  );
}

export default OrderForm;
