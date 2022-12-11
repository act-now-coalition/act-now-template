export interface SettingsJSON {
  siteName: string;
  siteUrl: string;
  gaTrackingId: string;
}

export class Settings {
  constructor(
    public readonly siteName: string,
    public readonly siteUrl: string,
    public readonly gaTrackingId: string
  ) {}

  static fromJSON(settingsJSON: SettingsJSON): Settings {
    return new Settings(
      settingsJSON.siteName,
      settingsJSON.siteUrl,
      settingsJSON.gaTrackingId
    );
  }

  toJSON(): SettingsJSON {
    return {
      siteName: this.siteName,
      siteUrl: this.siteUrl,
      gaTrackingId: this.gaTrackingId,
    };
  }
}
