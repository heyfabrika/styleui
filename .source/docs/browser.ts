// @ts-nocheck
import { browser } from 'fumadocs-mdx/runtime/browser';
import type * as Config from '../../source.config';

const create = browser<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>();
const browserCollections = {
  docs: create.doc("docs", {"blocks.mdx": () => import("../../content/docs/blocks.mdx?collection=docs&workspace=docs"), "components.mdx": () => import("../../content/docs/components.mdx?collection=docs&workspace=docs"), "index.mdx": () => import("../../content/docs/index.mdx?collection=docs&workspace=docs"), "roadmap.mdx": () => import("../../content/docs/roadmap.mdx?collection=docs&workspace=docs"), "templates.mdx": () => import("../../content/docs/templates.mdx?collection=docs&workspace=docs"), }),
};
export default browserCollections;