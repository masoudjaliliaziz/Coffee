"use client";
import { useState } from "react";
import ProductToggle from "./ProductToggle";

type Filter = {
  label: string;
  value: string;
};

type Props = {
  value: Filter[];
};

function ProductToggleGroup({ value }: Props) {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="w-5/6 h-full  flex   justify-center items-center   ">
      <div className="flex  justify-center items-center h-full w-full  ">
        {value.map((item) => (
          <div
            key={item.value}
            className="flex flex-col gap-0.5 justify-center items-center w-1/4  h-full  "
          >
            <h1 className="text-xs font-bold ">{item.label}</h1>
            <ProductToggle
              name="asiab"
              value={item.value}
              checked={selected === item.value}
              onChange={() => setSelected(item.value)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductToggleGroup;
