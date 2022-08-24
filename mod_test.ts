import { assertExists, assertFalse } from "std/testing/asserts.ts";
import lume from "lume/mod.ts";
import ci from "./mod.ts";
import { defaultName } from "./constants.ts";

Deno.test("default name", () => {
  const site = lume();
  assertFalse(site.globalData[defaultName]);
  site.use(ci());
  assertExists(site.globalData[defaultName]);
});

Deno.test("custom name", () => {
  const site = lume();
  assertFalse(site.globalData.lolmerskatez);
  site.use(ci({ name: "lolmerskatez" }));
  assertExists(site.globalData.lolmerskatez);
});
