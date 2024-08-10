export enum LeafType {
  INTRO_LEAF,
  STORY_LEAF,
  CHARA_LEAF,
}

export class Leaf {
  leaf1_url: string;
  leaf2_url: string;
  leaf3_url: string;
  type: LeafType;

  constructor(leaf1_url: string, leaf2_url: string, leaf3_url: string, type: LeafType) {
    this.leaf1_url = leaf1_url;
    this.leaf2_url = leaf2_url;
    this.leaf3_url = leaf3_url;
    this.type = type;
  }
}
