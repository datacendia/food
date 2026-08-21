/** Types for the Aye Si Cena dish matrix. */

export type Category = "canape" | "main" | "side" | "sweet" | "drink";

export type ServiceTier = "scran" | "buffet" | "plated";

export type Tag =
  | "vegetarian"
  | "vegan"
  | "seafood"
  | "alcohol"
  | "make-ahead"
  | "breakfast"
  | "signature";

export interface Dish {
  id: number;
  name: string;
  /** The British or Scottish original the dish descends from. */
  uk: string;
  /** The Peruvian ingredient or technique swapped in. */
  pe: string;
  blurb: string;
  /** Food cost per unit or portion, in soles. */
  cost: number;
  /** Menu value per unit or portion, in soles, excluding IGV. */
  price: number;
  category: Category;
  /** Primary supplier for the defining ingredient. */
  source: string;
  tags: Tag[];
  tiers: ServiceTier[];
}

export const CATEGORY_LABEL: Record<Category, string> = {
  canape: "Canapés & bites",
  main: "Mains",
  side: "Sides, salads & breads",
  sweet: "Bakery & desserts",
  drink: "Signature drinks"
};

export { DISHES } from "@/data/dishes";
