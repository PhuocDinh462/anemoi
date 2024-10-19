export default class Character {
  id: string; // Use for i18n
  furigana: string;
  latin: string;
  height: number;
  weight: number;
  threeSize: string;
  image: string;
  thumbnail: string;
  thumbnailActive: string;
  latinColor: string;

  constructor(
    id: string,
    furigana: string,
    latin: string,
    height: number,
    weight: number,
    threeSize: string,
    image: string,
    thumbnail: string,
    thumbnailActive: string,
    latinColor: string
  ) {
    this.id = id;
    this.furigana = furigana;
    this.latin = latin;
    this.height = height;
    this.weight = weight;
    this.threeSize = threeSize;
    this.image = image;
    this.thumbnail = thumbnail;
    this.thumbnailActive = thumbnailActive;
    this.latinColor = latinColor;
  }
}
