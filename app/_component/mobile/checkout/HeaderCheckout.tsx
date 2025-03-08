import { BackwardIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import React from "react";

function HeaderCheckout() {
  return (
    <div className="w-full h-1/12 flex justify-between items-center px-6">
      <h1 className="font-black text-lg">صورت حساب</h1>
      <Link href={"/dashboard/cart"}>
        <BackwardIcon width={25} />
      </Link>
    </div>
  );
}

export default HeaderCheckout;
