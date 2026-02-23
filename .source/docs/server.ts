// @ts-nocheck
import * as __fd_glob_5 from "../../content/docs/templates.mdx?collection=docs&workspace=docs"
import * as __fd_glob_4 from "../../content/docs/roadmap.mdx?collection=docs&workspace=docs"
import * as __fd_glob_3 from "../../content/docs/index.mdx?collection=docs&workspace=docs"
import * as __fd_glob_2 from "../../content/docs/components.mdx?collection=docs&workspace=docs"
import * as __fd_glob_1 from "../../content/docs/blocks.mdx?collection=docs&workspace=docs"
import { default as __fd_glob_0 } from "../../content/docs/meta.json?collection=docs&workspace=docs"
import { server } from 'fumadocs-mdx/runtime/server';
import type * as Config from '../../source.config';

const create = server<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>({"doc":{"passthroughs":["extractedReferences"]}});

export const docs = await create.docs("docs", "content/docs", {"meta.json": __fd_glob_0, }, {"blocks.mdx": __fd_glob_1, "components.mdx": __fd_glob_2, "index.mdx": __fd_glob_3, "roadmap.mdx": __fd_glob_4, "templates.mdx": __fd_glob_5, });