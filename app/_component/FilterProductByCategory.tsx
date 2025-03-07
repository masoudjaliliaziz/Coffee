"use client";

import { Category } from "@/app/_lib/serviceTypes";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

type Props = {
  data: Category;
};

function FilterProductByCategory({ data }: Props) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathName = usePathname();

  // مقدار فعلی type را از URL می‌گیریم
  const selectedType = searchParams.get("type");

  function handleFilter(filter: string): void {
    const params = new URLSearchParams(searchParams);

    if (selectedType === filter) {
      // اگر همین گزینه انتخاب شده بود، حذفش کن
      params.delete("type");
    } else {
      // در غیر این صورت مقدار جدید تنظیم کن
      params.set("type", filter);
    }

    // آدرس را بدون رفرش آپدیت کن
    router.replace(`${pathName}?${params.toString()}`, { scroll: false });
  }

  return (
    <label className="cursor-pointer label flex flex-col gap-2 w-1/3">
      <div className="flex flex-col md:flex-row justify-center items-center gap-2">
        <span className="label-text font-bold text-xl">{data?.slug}</span>
        <input
          type="checkbox" // ❗ تغییر از radio به checkbox
          className="toggle"
          checked={selectedType === data?.name} // بررسی وضعیت فعال/غیرفعال
          onChange={() => handleFilter(data?.name)}
        />
      </div>
      <span className="label-text text-center text-xs w-1/2 hidden md:block">
        {data?.description}
      </span>
    </label>
  );
}

export default FilterProductByCategory;
