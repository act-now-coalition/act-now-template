export interface SettingsJSON {
  siteName: string;
  siteUrl: string;
}

export class Settings {
  constructor(
    public readonly siteName: string,
    public readonly siteUrl: string
  ) {}

  static fromJSON(settingsJSON: SettingsJSON): Settings {
    return new Settings(settingsJSON.siteName, settingsJSON.siteUrl);
  }

  toJSON(): SettingsJSON {
    return {
      siteName: this.siteName,
      siteUrl: this.siteUrl,
    };
  }
}
