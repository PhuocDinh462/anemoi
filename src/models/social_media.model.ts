export default class SocialMedia {
  label: string;
  icon: string;
  href: string;

  constructor(label: string, icon: string, href: string) {
    this.label = label;
    this.icon = icon;
    this.href = href;
  }
}
