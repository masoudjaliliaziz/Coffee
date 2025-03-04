import Link from "next/link";

function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="hero bg-base-200 min-h-screen w-full ">
      <div className="hero-content w-full flex-col justify-center items-center">
        {/* content */}
        <div className="flex flex-col justify-center items-center gap-6   ">
          <h1 className="text-5xl  font-bold w-full  ">قهوه داینو</h1>
          <p className=" w-full text-center">وارد اکانت خود شوید</p>
        </div>
        {/* form */}
        <div className="card bg-base-100 lg:w-1/2 max-w-sm shrink-0 shadow-2xl">
          {children}
        </div>
      </div>
    </div>
  );
}

export default layout;
