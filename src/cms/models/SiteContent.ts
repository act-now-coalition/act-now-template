import keyBy from "lodash/keyBy";

import { assert } from "@actnowcoalition/assert";

import { Page, PageJSON } from "./Page";
import { Settings, SettingsJSON } from "./Settings";

export interface SiteContentJSON {
  settings: SettingsJSON;
  pages: PageJSON[];
}

export class SiteContent {
  readonly pagesById: { [pageId: string]: Page };

  constructor(
    public readonly settings: Settings,
    public readonly pages: Page[]
  ) {
    this.pagesById = keyBy(pages, (page) => page.pageId);
  }

  static fromJSON(siteContentJSON: SiteContentJSON): SiteContent {
    const { settings, pages } = siteContentJSON;
    return new SiteContent(
      Settings.fromJSON(settings),
      pages.map(Page.fromJSON)
    );
  }

  toJSON(): SiteContentJSON {
    return {
      settings: this.settings.toJSON(),
      pages: this.pages.map((page) => page.toJSON()),
    };
  }

  getPageById(pageId: string): Page {
    const page = this.pagesById[pageId];
    assert(page, `Page with pageId: ${pageId} not found`);
    return page;
  }
}
