import { currentUser } from "@/app/_lib/data-service";
import Image from "next/image";

export default async function UserProfile({ userId }: { userId: string }) {
  const user = await currentUser(userId);
  const imageUrl = user?.at(0).image;

  // افزودن timestamp به URL تصویر برای جلوگیری از کش شدن

  return (
    <div>
      {imageUrl ? (
        <div className="w-10 h-10 rounded-full relative overflow-hidden">
          <Image
            fill
            className="object-cover"
            alt="User Profile Picture"
            src={imageUrl}
          />
        </div>
      ) : (
        <p>No image available</p>
      )}
    </div>
  );
}
