"use client";
import { supabase } from "@/app/_lib/supabase";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function UserProfile({ userId }) {
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    const fetchUserImage = async () => {
      const { data, error } = await supabase
        .from("users")
        .select("image")
        .eq("id", userId)
        .single();

      if (error) {
        console.error("Error fetching image:", error.message);
      } else {
        console.log(data.image);
        setImageUrl(data.image);
      }
    };

    fetchUserImage();
  }, [userId]);

  return (
    <div>
      {imageUrl ? (
        <div className="w-10 h-10 rounded-full relative overflow-hidden">
          <Image
            fill
            className="object-cover"
            alt="Tailwind CSS Navbar component"
            src={imageUrl}
          />
        </div>
      ) : (
        <p>No image available</p>
      )}
    </div>
  );
}
