import { Microcopy, MicrocopyItem } from "./Microcopy";

export interface PageJSON {
  pageId: string;
  microcopy: MicrocopyItem[];
}

export class Page {
  constructor(
    public readonly pageId: string,
    public readonly microcopy: Microcopy
  ) {}

  static fromJSON(pageJSON: PageJSON): Page {
    return new Page(pageJSON.pageId, Microcopy.fromJSON(pageJSON.microcopy));
  }

  toJSON(): PageJSON {
    return {
      pageId: this.pageId,
      microcopy: this.microcopy.toJSON(),
    };
  }
}
