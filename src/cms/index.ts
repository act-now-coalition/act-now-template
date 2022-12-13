import pagesJSON from "./content/pages.json";
import settingsJSON from "./content/settings.json";
import { Page } from "./models/Page";
import { Settings } from "./models/Settings";
import { SiteContent } from "./models/SiteContent";

export * from "./models/Settings";
export * from "./models/SiteContent";
export * from "./models/Page";

const settings = Settings.fromJSON(settingsJSON);
const pages = pagesJSON.pages.map((pageJSON) => Page.fromJSON(pageJSON));

export const cms = new SiteContent(settings, pages);
