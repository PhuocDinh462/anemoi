import { Leaf, LeafType } from '@/models/leaf.model';
import {
  chara_leaf_1,
  chara_leaf_2,
  chara_leaf_3,
  intro_leaf_1,
  intro_leaf_2,
  intro_leaf_3,
  story_leaf_1,
  story_leaf_2,
  story_leaf_3
} from './images';

export const Leaves: Array<Leaf> = [
  new Leaf(intro_leaf_1, intro_leaf_2, intro_leaf_3, LeafType.INTRO_LEAF),
  new Leaf(story_leaf_1, story_leaf_2, story_leaf_3, LeafType.STORY_LEAF),
  new Leaf(chara_leaf_1, chara_leaf_2, chara_leaf_3, LeafType.CHARA_LEAF)
];
