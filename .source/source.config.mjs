var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// content/docs/source.config.ts
var source_config_exports = {};
__export(source_config_exports, {
  default: () => source_config_default,
  docs: () => docs
});
import { defineDocs, defineConfig } from "fumadocs-mdx/config";
var docs, source_config_default;
var init_source_config = __esm({
  "content/docs/source.config.ts"() {
    "use strict";
    docs = defineDocs({
      dir: ".",
      docs: {
        postprocess: {
          includeProcessedMarkdown: true
        }
      }
    });
    source_config_default = defineConfig();
  }
});

// content/components/source.config.ts
var source_config_exports2 = {};
__export(source_config_exports2, {
  default: () => source_config_default2,
  docs: () => docs2
});
import { defineDocs as defineDocs2, defineConfig as defineConfig2 } from "fumadocs-mdx/config";
var docs2, source_config_default2;
var init_source_config2 = __esm({
  "content/components/source.config.ts"() {
    "use strict";
    docs2 = defineDocs2({
      dir: ".",
      docs: {
        postprocess: {
          includeProcessedMarkdown: true
        }
      }
    });
    source_config_default2 = defineConfig2();
  }
});

// source.config.ts
import { defineConfig as defineConfig3 } from "fumadocs-mdx/config";
var source_config_default3 = defineConfig3({
  workspaces: {
    "docs": {
      dir: "content/docs",
      config: await Promise.resolve().then(() => (init_source_config(), source_config_exports))
    },
    "components": {
      dir: "content/components",
      config: await Promise.resolve().then(() => (init_source_config2(), source_config_exports2))
    }
  }
});
export {
  source_config_default3 as default
};
