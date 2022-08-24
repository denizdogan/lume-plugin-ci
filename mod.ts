import { defaultOptions } from "./constants.ts";
import { ci, Site } from "./deps.ts";
import type { Options } from "./types.ts";

export default (options: Options = defaultOptions) => (site: Site) =>
  site.data(options.name, ci);
