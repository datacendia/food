import type { Metadata } from "next";
import Recipes from "@/components/Recipes";
import { DISHES } from "@/data/dishes";
import { RECIPES } from "@/data/recipes";

export const metadata: Metadata = { title: "Recipes" };

export default function RecipesPage() {
  return (
    <>
      <section className="border-b border-line py-12">
        <h1 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
          Recipes
        </h1>
        <p className="mt-4 max-w-2xl text-ink-2">
          Written for a catering kitchen: batch yields, not family portions, and every one says how
          far ahead it can be made and how it behaves once it leaves the pass. Being written in
          tranches — {RECIPES.length} of {DISHES.length} so far.
        </p>
      </section>
      <section className="py-10">
        <Recipes dishes={DISHES} recipes={RECIPES} />
      </section>
    </>
  );
}
