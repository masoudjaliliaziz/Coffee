"use client";
import { supabase } from "@/app/_lib/supabase";
import { useState } from "react";

export default function UploadImage() {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const userId = "c3b0514f-b555-4fff-85b8-cfc61fcaa55f"; // شناسه کاربر (باید مقدار واقعی رو اینجا بگذاری)

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const uploadFile = async () => {
    if (!file) return;

    setUploading(true);

    const fileExt = file.name.split(".").pop();
    const fileName = `${userId}-${Date.now()}.${fileExt}`;
    const filePath = `avatars/${fileName}`; // مسیر ذخیره فایل

    // آپلود در Storage
    const { data, error } = await supabase.storage
      .from("avatar")
      .upload(filePath, file, { upsert: true });

    if (error) {
      console.error("Upload Error:", error.message);
      setUploading(false);
      return;
    }

    // دریافت URL عمومی
    const { data: publicUrlData } = supabase.storage
      .from("avatar")
      .getPublicUrl(filePath);

    const publicUrl = publicUrlData.publicUrl;
    console.log("Uploaded File URL:", publicUrl);

    // ذخیره در جدول `users`
    const { error: updateError } = await supabase
      .from("users")
      .update({ image: publicUrl })
      .eq("id", userId);

    setUploading(false);

    if (updateError) {
      console.error("Database Update Error:", updateError.message);
    } else {
      console.log("Image URL saved to database!");
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={uploadFile} disabled={uploading}>
        {uploading ? "Uploading..." : "Upload"}
      </button>
    </div>
  );
}
