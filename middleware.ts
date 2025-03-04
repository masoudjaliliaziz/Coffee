import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

// 1. Specify protected and public routes
const protectedRoutes = "/dashboard";
const publicRoutes = ["/login", "/signup", "/", "/auth/login"]; // اضافه کردن /auth/login به لیست

export default async function middleware(req: NextRequest) {
  // 2. Check if the current route is protected or public
  const path = req.nextUrl.pathname;
  const isProtectedRoute = path.startsWith(protectedRoutes);
  const isPublicRoute = publicRoutes.includes(path);

  // 3. Decrypt the session from the cookie
  const accessToken = (await cookies()).get("accessTocken")?.value;

  const isLogin = accessToken;
  const isLogout = !accessToken;

  if (isProtectedRoute && isLogout && path !== "/auth/login") {
    return NextResponse.redirect(new URL("/auth/login", req.nextUrl)); // ریدایرکت به /auth/login
  }

  // 5. Redirect to /dashboard if the user is authenticated
  if (path === "/" && isLogin && isPublicRoute) {
    return NextResponse.redirect(new URL("/dashboard", req.nextUrl));
  }

  return NextResponse.next();
}

// Routes Middleware should not run on
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
