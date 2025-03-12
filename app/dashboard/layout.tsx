import Dock from "@/app/_component/mobile/Dock";
import Navbar from "../_component/mobile/Navbar";
import UserProfile from "../_component/mobile/UserProfile";
function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full h-dvh">
      <Navbar>
        <UserProfile userId={"c3b0514f-b555-4fff-85b8-cfc61fcaa55f"} />
      </Navbar>
      {children}

      <Dock />
    </div>
  );
}

export default layout;
