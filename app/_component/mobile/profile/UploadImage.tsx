"use client";
import { fetchUser } from "@/app/_lib/data-service";
import { supabase } from "@/app/_lib/supabase";
import { useState, useEffect } from "react";

export default function UploadImage() {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [userId, setUserId] = useState(null);

  // گرفتن شناسه کاربر از Supabase
  useEffect(() => {
    const fetchUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (user) {
        console.log(user);
        setUserId(user.id);
      }
    };

    fetchUser();
  }, [userId]);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const uploadFile = async () => {
    if (!file || !userId) return;

    setUploading(true);

    const fileExt = file.name.split(".").pop();
    const fileName = `${userId}.${fileExt}`;
    const filePath = `avatars/${fileName}`;

    // حذف عکس قبلی (در صورت وجود)
    await supabase.storage.from("avatar").remove([filePath]);

    // آپلود در Storage
    const { data, error } = await supabase.storage
      .from("avatar")
      .upload(filePath, file, { upsert: true });

    if (error) {
      console.error("🚨 Upload Error:", error.message);
      setUploading(false);
      return;
    }

    // دریافت URL عمومی
    const { data: publicUrlData } = supabase.storage
      .from("avatar")
      .getPublicUrl(filePath);

    const publicUrl = publicUrlData.publicUrl;
    console.log("✅ Uploaded File URL:", publicUrl);

    // ذخیره در جدول `users`
    const { error: updateError } = await supabase
      .from("users")
      .update({ image: publicUrl })
      .eq("id", userId);

    setUploading(false);

    if (updateError) {
      console.error("🚨 Database Update Error:", updateError.message);
    } else {
      console.log("✅ Image URL saved to database!");
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button
        className="bg-red-300 cursor-pointer"
        onClick={uploadFile}
        disabled={uploading}
      >
        {uploading ? "Uploading..." : "Upload"}
      </button>
    </div>
  );
}
