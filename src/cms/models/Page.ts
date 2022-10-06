import { Microcopy, MicrocopyItem } from "./Microcopy";
import { MetaTags, MetaTagsJSON } from "./MetaTags";

export interface PageJSON {
  pageId: string;
  microcopy: MicrocopyItem[];
  metaTags: MetaTagsJSON;
}

export class Page {
  constructor(
    public readonly pageId: string,
    public readonly microcopy: Microcopy,
    public readonly metaTags: MetaTags
  ) {}

  static fromJSON(pageJSON: PageJSON): Page {
    return new Page(
      pageJSON.pageId,
      Microcopy.fromJSON(pageJSON.microcopy),
      MetaTags.fromJSON(pageJSON.metaTags)
    );
  }

  toJSON(): PageJSON {
    return {
      pageId: this.pageId,
      microcopy: this.microcopy.toJSON(),
      metaTags: this.metaTags.toJSON(),
    };
  }
}
