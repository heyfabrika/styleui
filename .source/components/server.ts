// @ts-nocheck
import * as __fd_glob_2 from "../../content/components/counter.mdx?collection=docs&workspace=components"
import * as __fd_glob_1 from "../../content/components/animated-list.mdx?collection=docs&workspace=components"
import { default as __fd_glob_0 } from "../../content/components/meta.json?collection=docs&workspace=components"
import { server } from 'fumadocs-mdx/runtime/server';
import type * as Config from '../../source.config';

const create = server<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>({"doc":{"passthroughs":["extractedReferences"]}});

export const docs = await create.docs("docs", "content/components", {"meta.json": __fd_glob_0, }, {"animated-list.mdx": __fd_glob_1, "counter.mdx": __fd_glob_2, });