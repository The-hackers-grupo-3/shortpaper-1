import sum from "../lib/prueba";

test("suma 1 + 2 es igual a 3", () => {
  expect(sum(1, 2)).toBe(3);
});
