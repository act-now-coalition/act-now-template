export interface MetaTagsJSON {
  title: string;
  description: string;
  socialImg?: string;
  socialImgWidth?: string;
  socialImgHeight?: string;
}

export class MetaTags {
  constructor(public readonly json: MetaTagsJSON) {}

  static fromJSON(json: MetaTagsJSON): MetaTags {
    return new MetaTags(json);
  }

  get title() {
    return this.json.title;
  }
  get description() {
    return this.json.description;
  }
  get socialImg() {
    return this.json.socialImg;
  }
  get socialImgWidth() {
    return this.json.socialImgWidth;
  }
  get socialImgHeight() {
    return this.json.socialImgHeight;
  }

  toJSON() {
    return this.json;
  }
}
