export enum LeafType {
  INTRO_LEAF,
  STORY_LEAF,
  CHARA_LEAF
}

export class Leaf {
  private leaf1_url: string;
  private leaf2_url: string;
  private leaf3_url: string;
  private type: LeafType;

  constructor(leaf1_url: string, leaf2_url: string, leaf3_url: string, type: LeafType) {
    this.leaf1_url = leaf1_url;
    this.leaf2_url = leaf2_url;
    this.leaf3_url = leaf3_url;
    this.type = type;
  }

  public getLeaf1Url(): string {
    return this.leaf1_url;
  }

  public getLeaf2Url(): string {
    return this.leaf2_url;
  }

  public getLeaf3Url(): string {
    return this.leaf3_url;
  }

  public getType(): LeafType {
    return this.type;
  }
}
