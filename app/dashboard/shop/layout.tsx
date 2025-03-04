import Dock from "@/app/_component/mobile/Dock";
function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="w-full h-dvh">{children}</div>;
}

export default layout;
