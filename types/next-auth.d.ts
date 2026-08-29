import type { DefaultSession } from "next-auth";
import type { Role } from "@/db/schema";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      role: Role;
      /** Set only for role = "client": the client record this login speaks for. */
      clientId: string | null;
      locale: "es" | "en";
      active: boolean;
    } & DefaultSession["user"];
  }
}
