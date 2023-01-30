import { assert } from "@actnowcoalition/actnow.js";

export interface MicrocopyItem {
  microcopyId: string;
  microcopyContent: string;
}

export class Microcopy {
  readonly microcopyById: { [microcopyId: string]: string };

  constructor(public readonly microcopyList: MicrocopyItem[]) {
    this.microcopyById = microcopyList.reduce(
      (acc, item) => ({
        ...acc,
        [item.microcopyId]: item.microcopyContent,
      }),
      {}
    );
  }

  get(microcopyId: string): string {
    const copy = this.microcopyById[microcopyId];
    assert(copy, `Missing microcopy with Id: ${microcopyId}`);
    return copy;
  }

  static fromJSON(microcopyList: MicrocopyItem[]): Microcopy {
    return new Microcopy(microcopyList);
  }

  toJSON(): MicrocopyItem[] {
    return this.microcopyList;
  }
}
