"use client";

import { supabase } from "@/app/_lib/supabase";
import { useState, useEffect } from "react";

export default function UploadImage({ id }) {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [userId, setUserId] = useState(null);
  const [currentImage, setCurrentImage] = useState(null);

  // گرفتن شناسه کاربر از Supabase
  useEffect(() => {
    setUserId(id);
  }, [id]);

  // دریافت تصویر کاربر از دیتابیس
  useEffect(() => {
    if (userId) {
      const fetchUserData = async () => {
        const { data, error } = await supabase
          .from("users")
          .select("image")
          .eq("id", userId)
          .single();

        if (data) {
          setCurrentImage(data.image); // ذخیره کردن URL تصویر فعلی کاربر
        }

        if (error) {
          console.error("🚨 Error fetching user data:", error.message);
        }
      };

      fetchUserData();
    }
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

    // حذف تصویر قبلی در صورت وجود
    if (currentImage) {
      const previousFilePath = currentImage.split("/").pop();
      await supabase.storage
        .from("avatar")
        .remove([`avatars/${previousFilePath}`]);
    }

    // آپلود فایل جدید
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

    // ذخیره URL جدید در جدول `users`
    const { error: updateError } = await supabase
      .from("users")
      .update({ image: publicUrl })
      .eq("id", userId);

    setUploading(false);

    if (updateError) {
      console.error("🚨 Database Update Error:", updateError.message);
    } else {
      console.log("✅ Image URL saved to database!");
      setCurrentImage(publicUrl); // ذخیره کردن مسیر جدید تصویر
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
      {currentImage && <img src={currentImage} alt="User Avatar" />}
    </div>
  );
}
