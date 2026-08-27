"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import { requireViewer } from "@/lib/session";
import { createClient, updateClient } from "@/lib/repo/clients";

const ClientForm = z.object({
  name: z.string().min(1, "A client needs a name."),
  contact: z.string().max(200).nullish(),
  phone: z.string().max(60).nullish(),
  district: z.string().max(60).nullish(),
  notes: z.string().max(4000).nullish()
});

function parse(form: FormData) {
  const parsed = ClientForm.safeParse(Object.fromEntries(form));
  if (!parsed.success) throw new Error(parsed.error.issues[0].message);
  return {
    ...parsed.data,
    // Checkboxes arrive as repeated keys; anything not a diet lib/dietary.ts
    // knows is dropped in the repository rather than stored as a lookalike.
    diets: form.getAll("diets").map(String)
  };
}

export async function addClient(_prev: string | undefined, form: FormData) {
  const me = await requireViewer();
  let id: string;
  try {
    id = await createClient(me, parse(form));
  } catch (err) {
    return err instanceof Error ? err.message : "Could not save that.";
  }
  revalidatePath("/clients");
  redirect(`/clients/${id}`);
}

export async function editClient(id: string, _prev: string | undefined, form: FormData) {
  const me = await requireViewer();
  try {
    await updateClient(me, id, parse(form));
  } catch (err) {
    return err instanceof Error ? err.message : "Could not save that.";
  }
  revalidatePath("/clients");
  revalidatePath(`/clients/${id}`);
  return undefined;
}
