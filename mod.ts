import type { Site } from "lume/core.ts";
import { ci } from "./deps.ts";
import { defaultOptions } from "./constants.ts";
import type { Options } from "./types.ts";

export default (options: Options = defaultOptions) => (site: Site) =>
  site.data(options.name, ci);
