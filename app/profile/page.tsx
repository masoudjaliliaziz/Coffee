import { cookies } from "next/headers";
import UploadImage from "../_component/mobile/profile/UploadImage";
import { fetchUser } from "../_lib/data-service";

async function page() {
  // const cookieStore = await cookies();
  // console.log(cookieStore.get("accessTocken")?.value);

  fetchUser().then((res) => console.log(res));

  return (
    <div>
      <UploadImage />
    </div>
  );
}

export default page;
