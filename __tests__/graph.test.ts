import { DISHES } from "@/data/dishes";
import { buildIngredientGraph, orphanDishes, buyList } from "@/lib/graph";

const graph = buildIngredientGraph(DISHES);

describe("ingredient graph", () => {
  it("finds ingredients across the matrix", () => {
    expect(graph.length).toBeGreaterThan(50);
  });

  it("sorts by reach, most connected first", () => {
    const counts = graph.map((n) => n.dishes.length);
    expect(counts).toEqual([...counts].sort((a, b) => b - a));
  });

  it("never lists a dish twice against one ingredient", () => {
    for (const n of graph) expect(new Set(n.dishes).size).toBe(n.dishes.length);
  });

  it("only references real dishes", () => {
    const ids = new Set(DISHES.map((d) => d.id));
    for (const n of graph) for (const id of n.dishes) expect(ids.has(id)).toBe(true);
  });

  it("accumulates menu value, not just counts", () => {
    const top = graph[0];
    const expected = top.dishes
      .map((id) => DISHES.find((d) => d.id === id)!.price)
      .reduce((s, p) => s + p, 0);
    expect(top.value).toBeCloseTo(expected, 6);
  });

  it("merges parenthetical variants into one line item", () => {
    const names = graph.map((n) => n.name);
    expect(names.every((n) => !n.includes("("))).toBe(true);
  });
});

describe("orphans", () => {
  it("finds dishes that are the sole consumer of something", () => {
    const orphans = orphanDishes(DISHES, graph);
    expect(orphans.length).toBeGreaterThan(0);
    for (const o of orphans) expect(o.soleUseOf.length).toBeGreaterThan(0);
  });

  it("never flags an ingredient two dishes share", () => {
    const shared = graph.filter((n) => n.dishes.length > 1).map((n) => n.name);
    const orphans = orphanDishes(DISHES, graph);
    for (const o of orphans) {
      for (const ing of o.soleUseOf) expect(shared).not.toContain(ing);
    }
  });
});

describe("buy list", () => {
  it("returns the most connected ingredients, capped", () => {
    expect(buyList(graph, 20)).toHaveLength(20);
    expect(buyList(graph, 20)[0].dishes.length).toBeGreaterThanOrEqual(
      buyList(graph, 20)[19].dishes.length
    );
  });
});
