"use client";

import { Login } from "@/app/actions/login";
import Link from "next/link";
import { useActionState } from "react";

function LoginForm() {
  const [state, action, pending] = useActionState(Login, undefined);
  return (
    <form className="card-body " action={action}>
      <fieldset className="fieldset">
        <label className="floating-label">
          <span>ایمیل</span>
          <input
            name="email"
            type="email"
            className="input input-ghost  border-primary-content "
            placeholder="ایمیل"
          />
        </label>
        <label className="floating-label">
          <span>گذرواژه</span>
          <input
            name="password"
            type="password"
            className="input input-ghost border border-primary-content"
            placeholder="گذرواژه"
          />
        </label>

        <div className="flex w-full justify-start items-center gap-1">
          <span className="">هنوز حساب کاربری ندارید ؟</span>
          <Link className="link link-hover" href={"/auth/signup"}>
            ثبت نام
          </Link>
        </div>
        <button type="submit" className="btn btn-neutral mt-4">
          ورود
        </button>
      </fieldset>
    </form>
  );
}

export default LoginForm;
