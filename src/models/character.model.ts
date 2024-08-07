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
  image: string;
  thumbnail: string;
  thumbnailActive: string;
  latinColor: string;

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
    illustration: string,
    image: string,
    thumbnail: string,
    thumbnailActive: string,
    latinColor: string
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
    this.image = image;
    this.thumbnail = thumbnail;
    this.thumbnailActive = thumbnailActive;
    this.latinColor = latinColor;
  }
}
