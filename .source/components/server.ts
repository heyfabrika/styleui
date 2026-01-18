// @ts-nocheck
import * as __fd_glob_0 from "../../content/components/index.mdx?collection=docs&workspace=components"
import { server } from 'fumadocs-mdx/runtime/server';
import type * as Config from '../../source.config';

const create = server<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>({"doc":{"passthroughs":["extractedReferences"]}});

export const docs = await create.docs("docs", "content/components", {}, {"index.mdx": __fd_glob_0, });