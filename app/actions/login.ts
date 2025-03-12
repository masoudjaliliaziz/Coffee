import { login } from "@/app/_lib/data-service";
import { LoginFormSchema, LoginFormState } from "@/app/lib/definitions";
import { createSession } from "@/app/lib/session";
import { redirect } from "next/navigation";

export async function Login(state: LoginFormState, formData: FormData) {
  // Validate form fields
  const validatedFields = LoginFormSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const data = await login(validatedFields.data);
  console.log(data);
  if (data.session) {
    await createSession({
      tocken: data.session.access_token,
      userId: data.user.id,
    });

    redirect("/dashboard");
  }
  // Call the provider or db to create a user...
}
