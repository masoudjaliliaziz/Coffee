"use client";
import { useAppSelector } from "@/global_state/hook";
import { RootState } from "@/global_state/store";
import Image from "next/image";
import Link from "next/link";

function CartProducts() {
  const store = useAppSelector((state: RootState) => state.card);
  console.log(store);
  return (
    <div className="w-full flex flex-col gap-3 h-5/6  overflow-y-scroll no-scrollbar">
      {store.map((product) => (
        <Link
          href={`/dashboard/${product.product.id}`}
          key={product.product.id}
          className="w-full min-h-28 rounded-md  flex flex-row  items-center gap-2 cursor-pointer bg-white p-3 overflow-hidden"
        >
          <div className="w-1/3 h-full  rounded-md relative">
            <Image
              src={"/slide1.jpeg"}
              alt="product-image"
              fill
              className="object-cover rounded-md"
            />
          </div>
          <div className="w-2/3 h-full px-3">
            <div className="h-1/3 w-full  flex">
              <h1 className="font-bold text-lg">{product.product.name}</h1>
            </div>
            <div className="w-full h-2/3 flex flex-col gap-2 ">
              <div className="w-full h-1/2 flex justify-start items-center gap-2">
                <div className="badge border-primary font-semibold">
                  {product.roast === "light"
                    ? "لایت"
                    : product.roast === "medium"
                    ? "مدیوم"
                    : product.roast === "dark"
                    ? "شکلاتی"
                    : ""}
                </div>
                <div className="badge border-primary font-semibold">
                  {product.weight === "250"
                    ? "۲۵۰ گرم"
                    : product.weight === "500"
                    ? "۵۰۰ گرم"
                    : product.weight === "750"
                    ? "۷۵۰ گرم"
                    : product.weight === "1000"
                    ? "۱۰۰۰ گرم"
                    : ""}
                </div>
                <div className="badge border-primary font-semibold">
                  {product.machine === "main"
                    ? "دستگاه صنعتی"
                    : product.machine === "moko"
                    ? "موکوپات"
                    : product.machine === "french"
                    ? "فرنچ پرس"
                    : product.machine === "home"
                    ? "دستگاه خانگی"
                    : ""}
                </div>
              </div>
              <div className="w-full h-1/2  flex justify-between items-center">
                <p className="font-bold text-sm">تعداد : {product.quantity}</p>
                <p className="font-bold text-sm">{product.price}هزار تومان</p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default CartProducts;
