# lume-plugin-ci

Lume plugin for accessing CI information. Integrates
[deno-ci](https://github.com/justjavac/deno-ci) with your Lume websites.

This can be useful for situations where you're not sure if some changes have
been deployed yet or not, e.g. you could put the Git commit SHA somewhere hidden
on the frontpage of your website.

## Usage

Import and add the plugin to your Lume configuration as such:

```ts
import ci from "https://deno.land/x/lume_plugin_ci@v0.0.1/mod.ts";
const site = lume();
site.use(ci());
export default site;
```

This will simply add the `ci` variable as global site data. It's an object which
contains information about the build system that was used to build the Lume
project.

If you don't like using `ci` as the name, you can pass another name as an
option:

```ts
site.use(ci({ name: "build" }));
```

The only dependency is [deno-ci](https://github.com/justjavac/deno-ci). Check
that repository for more details.
