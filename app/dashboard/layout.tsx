import Dock from "@/app/_component/mobile/Dock";
import Navbar from "../_component/mobile/Navbar";
function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full h-dvh">
      <Navbar />
      {children}

      <Dock />
    </div>
  );
}

export default layout;
