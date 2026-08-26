"use server";

import { AuthError } from "next-auth";
import { signIn, signOut } from "@/lib/auth";

/**
 * One message for every failure.
 *
 * "No such account" and "wrong password" are two facts a stranger should not
 * be able to establish, and telling them apart is how an email list gets
 * confirmed. The timing is equalised in lib/auth.ts for the same reason.
 */
const REFUSED = "That email and password do not match an account.";

export async function login(_prev: string | undefined, form: FormData) {
  const next = String(form.get("next") || "/");
  try {
    await signIn("credentials", {
      email: form.get("email"),
      password: form.get("password"),
      redirectTo: next.startsWith("/") ? next : "/"
    });
  } catch (err) {
    // next/navigation signals a redirect by throwing; that is success, not failure.
    if (err instanceof AuthError) return REFUSED;
    throw err;
  }
}

export async function logout() {
  await signOut({ redirectTo: "/login" });
}
