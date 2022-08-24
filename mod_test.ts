import ci from "./mod.ts";
import { defaultName } from "./constants.ts";
import lume from "https://deno.land/x/lume@v1.10.4/mod.ts";
import {
  assertExists,
  assertFalse,
} from "https://deno.land/std@0.152.0/testing/asserts.ts";

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
