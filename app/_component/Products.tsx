import { getProducts } from "@/app/_lib/data-service";
import { Product } from "@/app/_lib/serviceTypes";

import ProductCard from "./ProductCard";
import { Suspense } from "react";

async function Products({ type }) {
  const products: Product[] = await getProducts();
  if (!products.length) return null;
  let displayProduct: Product[] = products;

  if (type === "arabica") {
    displayProduct = products.filter(
      (product) => product.categories?.name === "arabica"
    );
  }
  if (type === "robusta") {
    displayProduct = products.filter(
      (product) => product.categories?.name === "robusta"
    );
  }
  if (type === "mix") {
    displayProduct = products.filter(
      (product) => product.categories?.name === "mix"
    );
  }

  return (
    <Suspense
      fallback={
        <div className="w-full flex justify-center items-center">
          {" "}
          <span className="loading loading-lg loading-spinner text-primary "></span>
        </div>
      }
    >
      <div key={type} className="flex flex-wrap  gap-0.5 justify-center">
        {displayProduct.map((Product) => (
          <ProductCard product={Product} key={Product.id} />
        ))}
      </div>
    </Suspense>
  );
}

export default Products;
