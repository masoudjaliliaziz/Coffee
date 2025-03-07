"use client";

import Link from "next/link";
import {
  ShoppingBagIcon,
  HomeIcon,
  BookOpenIcon,
} from "@heroicons/react/16/solid";
import { usePathname } from "next/navigation";
function Dock() {
  const pathName = usePathname().split("/").at(-1);

  return (
    <div className="dock  dock-sm sm:hidden  static">
      <Link
        href={"/dashboard"}
        className={pathName === "dashboard" ? "dock-active" : ""}
      >
        <HomeIcon width={20} />
        <span className="dock-label">خانه</span>
      </Link>

      <Link
        href={"/dashboard/shop"}
        className={pathName === "shop" ? "dock-active" : ""}
      >
        <ShoppingBagIcon width={20} />

        <span className="dock-label">فروشگاه</span>
      </Link>

      <Link
        href={"/dashboard/blog"}
        className={pathName === "blog" ? "dock-active" : ""}
      >
        <BookOpenIcon width={20} />
        <span className="dock-label">ولاگ</span>
      </Link>
    </div>
  );
}

export default Dock;
