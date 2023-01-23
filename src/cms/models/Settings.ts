export interface SettingsJSON {
  siteName: string;
  siteUrl: string;
  siteLogo: string;
  gaTrackingId: string;
}

export class Settings {
  constructor(
    public readonly siteName: string,
    public readonly siteUrl: string,
    public readonly siteLogo: string,
    public readonly gaTrackingId: string
  ) {}

  static fromJSON(settingsJSON: SettingsJSON): Settings {
    return new Settings(
      settingsJSON.siteName,
      settingsJSON.siteUrl,
      settingsJSON.siteLogo,
      settingsJSON.gaTrackingId
    );
  }

  toJSON(): SettingsJSON {
    return {
      siteName: this.siteName,
      siteUrl: this.siteUrl,
      siteLogo: this.siteLogo,
      gaTrackingId: this.gaTrackingId,
    };
  }
}
