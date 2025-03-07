import CartComplete from "@/app/_component/CartComplete";
import CartProducts from "@/app/_component/CartProducts";
import React from "react";

function page() {
  return (
    <div className="  w-full h-dvh py-3  pb-[120px]">
      <CartProducts />
      <CartComplete />
    </div>
  );
}

export default page;
