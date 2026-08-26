/**
 * Reading the viewer, on the server, in one place.
 *
 * Every page and every action starts here. A page that renders without calling
 * one of these is a page nobody checked, which is why `requireRole` throws
 * rather than redirecting on a role failure: a redirect can be raced or
 * ignored, and a thrown error cannot be half-rendered.
 */
import { redirect } from "next/navigation";
import { auth } from "./auth";
import { databaseConfigured } from "@/db";
import { CAN } from "./permissions";
import type { Role } from "@/db/schema";

export interface Viewer {
  id: string;
  email: string;
  name: string | null;
  role: Role;
  clientId: string | null;
}

/** The viewer, or null if nobody is signed in. */
export async function viewer(): Promise<Viewer | null> {
  // Without a database there are no sessions, so nobody is signed in - and
  // saying so beats a page that half-renders behind a network error.
  if (!databaseConfigured) return null;
  const session = await auth();
  const u = session?.user;
  if (!u?.id || !u.active) return null;
  return {
    id: u.id,
    email: u.email ?? "",
    name: u.name ?? null,
    role: u.role,
    clientId: u.clientId ?? null
  };
}

/** The viewer, or off to the login page. Use at the top of every private page. */
export async function requireViewer(): Promise<Viewer> {
  const v = await viewer();
  if (!v) redirect("/login");
  return v;
}

/**
 * The viewer, if they may do `what`. Throws otherwise.
 *
 *   const v = await requireCan(CAN.seeMoney, "see the food cost");
 */
export async function requireCan(
  allowed: (role: Role) => boolean, what: string
): Promise<Viewer> {
  const v = await requireViewer();
  if (!allowed(v.role)) throw new Error(`Not permitted: a ${v.role} cannot ${what}.`);
  return v;
}

export { CAN };
