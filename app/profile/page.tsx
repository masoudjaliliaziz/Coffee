import UploadImage from "../_component/mobile/profile/UploadImage";

import { cookies } from "next/headers";
import { currentUser } from "../_lib/data-service";

async function page() {
  const cookieStore = await cookies();
  const id = cookieStore.get("userId")?.value;

  if (id) {
    const user = await currentUser(String(id));
    console.log(id);
    console.log(user);
  }

  return (
    <div>
      <UploadImage id={id} />
      hi
    </div>
  );
}

export default page;
