export default class Character {
  alias: string;
  kanji: string;
  furigana: string;
  latin: string;
  catchphrase: string;
  profile: string;
  height: number;
  weight: number;
  threeSize: string;
  illustration: string;

  constructor(
    alias: string,
    kanji: string,
    furigana: string,
    latin: string,
    catchphrase: string,
    profile: string,
    height: number,
    weight: number,
    threeSize: string,
    illustration: string
  ) {
    this.alias = alias;
    this.kanji = kanji;
    this.furigana = furigana;
    this.latin = latin;
    this.catchphrase = catchphrase;
    this.profile = profile;
    this.height = height;
    this.weight = weight;
    this.threeSize = threeSize;
    this.illustration = illustration;
  }
}
