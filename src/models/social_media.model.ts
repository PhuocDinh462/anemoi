export default class SocialMedia {
  private label: string;
  private icon: string;
  private href: string;

  constructor(label: string, icon: string, href: string) {
    this.label = label;
    this.icon = icon;
    this.href = href;
  }

  getLabel(): string {
    return this.label;
  }

  getIcon(): string {
    return this.icon;
  }

  getHref(): string {
    return this.href;
  }
}
