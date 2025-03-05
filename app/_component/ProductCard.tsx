import { Product } from "@/app/_lib/serviceTypes";
import Image from "next/image";
import Link from "next/link";

type props = {
  product: Product;
};

function ProductCard({ product }: props) {
  return (
    <Link
      href={`dashboard/${product.id}`}
      className=" card  h-[250] w-[45%] sm:w-1/4 "
    >
      <figure className="w-full h-1/2 relative rounded-lg overflow-hidden ">
        <Image fill className="object-cover" src="/slide1.jpeg" alt="Shoes" />
      </figure>
      <div className="card-body h-1/2">
        <h2 className="card-title">{product?.name}</h2>

        <p className="text-sm font-black ">{product?.price},000 تومان</p>
      </div>
    </Link>
  );
}

export default ProductCard;
