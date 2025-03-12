"use server";
import "server-only";
import { cookies } from "next/headers";

export async function createSession({ tocken, userId }) {
  const accessExpiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

  const cookieStore = await cookies();

  cookieStore.set("accessTocken", tocken, {
    httpOnly: true,
    secure: true,
    expires: accessExpiresAt,
    sameSite: "lax",
    path: "/",
  });
  cookieStore.set("userId", userId, {
    httpOnly: true,
    secure: true,
    expires: accessExpiresAt,
    sameSite: "lax",
    path: "/",
  });
}
