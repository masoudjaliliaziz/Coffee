"use client";
import { useAppSelector } from "@/global_state/hook";
import { RootState } from "@/global_state/store";
import Link from "next/link";
import React from "react";

type Props = {};

function CartComplete({}: Props) {
  const cart = useAppSelector((state: RootState) => state.card);
  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);
  console.log(totalPrice);
  if (cart.length < 1) return;
  return (
    <div className="fixed bottom-[55px]  w-full h-1/6 rounded-t-xl flex gap-2 shadow-md bg-base-100">
      <div className=" w-2/3 h-full flex justify-center items-center">
        <Link
          href={"/checkout"}
          className="btn btn-neutral w-3/4 h-1/3 flex justify-center items-center hover:bg-primary"
        >
          خریدتو نهایی کن
        </Link>
      </div>
      <div className=" w-1/3 h-full flex flex-col justify-center items-center gap-6">
        <h1 className="text-lg font-bold text-base-300">قیمت نهایی</h1>
        <div className="flex gap-2 justify-center items-center">
          <h1 className="text-2xl font-black">{totalPrice} </h1>
          <h1 className="text-xs font-black">هزار تومان </h1>
        </div>
      </div>
    </div>
  );
}

export default CartComplete;
