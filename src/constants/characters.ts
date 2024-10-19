import Character from '@/models/character.model';
import {
  character_1,
  character_bt_1,
  character_bt_1_a,
  character_2,
  character_bt_2,
  character_bt_2_a,
  character_3,
  character_bt_3,
  character_bt_3_a,
  character_4,
  character_bt_4,
  character_bt_4_a,
  character_5,
  character_bt_5,
  character_bt_5_a
} from './images';

export const CHARACTERS: Array<Character> = [
  // Spica
  new Character(
    // id
    'spica',
    // furigana
    'つじくら すぴか',
    // latin
    'Spica',
    // height
    148,
    // weight
    40,
    // threeSize
    '74/52/75',
    // illustration
    'Na-Ga',
    // image
    character_1,
    // thumbnail
    character_bt_1,
    // thumbnailActive
    character_bt_1_a,
    // latinColor
    '#8fdbe9'
  ),
  // Aino
  new Character(
    // id
    'aino',
    // furigana
    'ふさば あいの',
    // latin
    'Aino',
    // height
    145,
    // weight
    39,
    // threeSize
    '73/51/73',
    // illustration
    'きみしま青',
    // image
    character_2,
    // thumbnail
    character_bt_2,
    // thumbnailActive
    character_bt_2_a,
    // latinColor
    '#ffdc61'
  ),
  // Hiiro
  new Character(
    // id
    'hiiro',
    // furigana
    'あわゆき ひいろ',
    // latin
    'Hiiro',
    // height
    167,
    // weight
    56,
    // threeSize
    '90/60/88',
    // illustration
    'ふむゆん',
    // image
    character_3,
    // thumbnail
    character_bt_3,
    // thumbnailActive
    character_bt_3_a,
    // latinColor
    '#ffaab7'
  ),
  // Koyomi
  new Character(
    // id
    'koyomi',
    // furigana
    'しらと こよみ',
    // latin
    'Koyomi',
    // height
    152,
    // weight
    44,
    // threeSize
    '78/56/79',
    // illustration
    '永山ゆうのん',
    // image
    character_4,
    // thumbnail
    character_bt_4,
    // thumbnailActive
    character_bt_4_a,
    // latinColor
    '#ffa555'
  ),
  // Rikka
  new Character(
    // id
    'rikka',
    // furigana
    'はやかわ りっか',
    // latin
    'Rikka',
    // height
    158,
    // weight
    52,
    // threeSize
    '86/58/88',
    // illustration
    'Na-Ga',
    // image
    character_5,
    // thumbnail
    character_bt_5,
    // thumbnailActive
    character_bt_5_a,
    // latinColor
    '#c498d7'
  )
];
