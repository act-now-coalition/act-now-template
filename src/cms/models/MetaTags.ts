export interface MetaTagsJSON {
  title: string;
  description: string;
  socialImg?: string;
  imgSize?: string;
}

export class MetaTags {
  constructor(
    public readonly title: string,
    public readonly description: string,
    public readonly socialImg?: string,
    public readonly imgSize?: string
  ) {}

  static fromJSON(metaTagsJSON: MetaTagsJSON): MetaTags {
    return new MetaTags(
      metaTagsJSON.title,
      metaTagsJSON.description,
      metaTagsJSON.socialImg,
      metaTagsJSON.imgSize
    );
  }

  toJSON(): MetaTagsJSON {
    return {
      title: this.title,
      description: this.description,
      socialImg: this.socialImg,
      imgSize: this.imgSize,
    };
  }
}
