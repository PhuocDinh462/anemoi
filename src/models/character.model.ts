export default class Character {
  private id: string;
  private furigana: string;
  private latin: string;
  private height: number;
  private weight: number;
  private threeSize: string;
  private image: string;
  private thumbnail: string;
  private thumbnailActive: string;
  private latinColor: string;

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

  getId(): string {
    return this.id;
  }

  getFurigana(): string {
    return this.furigana;
  }

  getLatin(): string {
    return this.latin;
  }

  getHeight(): number {
    return this.height;
  }

  getWeight(): number {
    return this.weight;
  }

  getThreeSize(): string {
    return this.threeSize;
  }

  getImage(): string {
    return this.image;
  }

  getThumbnail(): string {
    return this.thumbnail;
  }

  getThumbnailActive(): string {
    return this.thumbnailActive;
  }

  getLatinColor(): string {
    return this.latinColor;
  }
}
