// @ts-nocheck
import * as __fd_glob_1 from "../../content/components/counter.mdx?collection=docs&workspace=components"
import * as __fd_glob_0 from "../../content/components/animated-list.mdx?collection=docs&workspace=components"
import { server } from 'fumadocs-mdx/runtime/server';
import type * as Config from '../../source.config';

const create = server<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>({"doc":{"passthroughs":["extractedReferences"]}});

export const docs = await create.docs("docs", "content/components", {}, {"animated-list.mdx": __fd_glob_0, "counter.mdx": __fd_glob_1, });