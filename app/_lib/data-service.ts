"use server";

import { notFound, redirect } from "next/navigation";
import { supabase } from "./supabase";
import {
  Category,
  loginData,
  MostSellersProduct,
  Product,
  SignUpData,
} from "./serviceTypes";
import bcrypt from "bcryptjs";
import { cookies } from "next/headers";

//auth---------------------------------

export async function signup(userData: SignUpData) {
  const { data: userAuth, error: errorAuth } = await supabase.auth.signUp({
    email: userData.email,
    password: userData.password,
  });

  if (errorAuth) {
    console.error(errorAuth);
  }
  if (!userAuth.user) {
    console.error("User creation failed");
    return;
  }
  const hashedPassword = await bcrypt.hash(userData.password, 10);
  const { data: userPublic, error: errorPublic } = await supabase
    .from("users")
    .insert([
      {
        id: userAuth.user?.id,
        email: userData.email,
        password: hashedPassword,
        firstName: userData.firstName,
        lastName: userData.lastName,
        role: "customer",
      },
    ])
    .select();

  if (errorPublic) {
    console.error(errorPublic);
  }

  return userAuth;
}

export async function login(loginData: loginData) {
  const { data: loginAuthData, error: loginError } =
    await supabase.auth.signInWithPassword(loginData);

  if (loginError) {
    console.error(loginError);
  }

  return loginAuthData;
}

export async function logout() {
  const { error } = await supabase.auth.signOut();
  if (error) console.error(error);
  const cookieStore = await cookies();
  cookieStore.delete("accessTocken");
  redirect("/auth/login");
}
//shop ---------------------------------

export async function getCategories(): Promise<Category[]> {
  const { data: categories, error } = await supabase
    .from("categories")
    .select("*");

  if (error) {
    console.error(error);
    notFound();
  }

  return categories ?? [];
}

export async function getMostSellers(): Promise<MostSellersProduct[] | null> {
  const { data: products, error } = await supabase
    .from("products")
    .select(
      `
      *,
      categories (name),
      badges!inner(name) 
    `
    )
    .eq("badges.name", "offer");
  if (error) {
    console.error("Error fetching most selling products:", error);
  }

  return products;
}

export async function getProductById(id: string): Promise<Product[] | null> {
  const { data: product, error } = await supabase
    .from("products")
    .select("* , categories (name , slug),badges(name , description)")

    .eq("id", id);

  if (error) console.error(error);
  return product;
}

export async function getProducts(): Promise<Product[]> {
  const { data: products, error } = await supabase
    .from("products")
    .select(`* ,categories (name)`);

  if (error) {
    console.error(error);
    notFound();
  }
  return products;
}

// اگر از NextAuth استفاده می‌کنی
// برای Next.js 13 به بالا

// برای Next.js 13 به بالا

export async function fetchUser() {
  const cookieStore = await cookies(); // گرفتن سشن از next-auth
  const accessToken = cookieStore.get("accessTocken")?.value; // گرفتن access token

  console.log("Access Token:", accessToken); // برای دیباگ

  if (accessToken) {
    try {
      // تنظیم سشن در Supabase با فقط access_token
      const { error } = await supabase.auth.setSession({
        access_token: accessToken,
      });

      if (error) {
        console.error("Error setting session:", error.message);
        return null; // اگر خطا بود، مقدار null برمی‌گردونیم
      }
    } catch (err) {
      console.error("Error during session setting:", err.message);
      return null; // اگر خطای کلی بود
    }
  } else {
    console.log("No access token found.");
    return null; // اگر توکن نبود، null برمی‌گردونیم
  }

  // دریافت کاربر از Supabase
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error) {
    console.error("Error fetching user:", error.message);
    return null; // اگر خطا داشت، null برمی‌گردونیم
  }

  console.log("User:", user); // برای دیباگ
  return user;
}
