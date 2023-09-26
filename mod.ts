import { defaultOptions } from "./constants.ts";
import { ci, Site } from "./deps.ts";
import type { Options } from "./types.ts";

const plugin =
  (options: Options = defaultOptions) =>
  (site: Site) =>
    site.data(options.name, ci);

export default plugin;
