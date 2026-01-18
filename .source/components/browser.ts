// @ts-nocheck
import { browser } from 'fumadocs-mdx/runtime/browser';
import type * as Config from '../../source.config';

const create = browser<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>();
const browserCollections = {
  docs: create.doc("docs", {"animated-list.mdx": () => import("../../content/components/animated-list.mdx?collection=docs&workspace=components"), "counter.mdx": () => import("../../content/components/counter.mdx?collection=docs&workspace=components"), }),
};
export default browserCollections;