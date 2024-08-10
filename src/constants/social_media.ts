import SocialMedia from "@/models/social_media.model";
import { x_bt, line_bt, github_bt, fb_bt, discord_bt } from "./image";

export const SocialMediaArr: Array<SocialMedia> = [
  new SocialMedia(
    x_bt,
    "https://twitter.com/intent/tweet?text=約束は、風の中に――　Keyフルプライス最新作『anemoi』オフィシャルサイト公開。&url=https://key.visualarts.gr.jp/anemoi/&hashtags=アネモイ"
  ),
  new SocialMedia(
    fb_bt,
    "http://www.facebook.com/share.php?u=https://key.visualarts.gr.jp/anemoi/"
  ),
  new SocialMedia(
    line_bt,
    "https://social-plugins.line.me/lineit/share?url=https://key.visualarts.gr.jp/anemoi/"
  ),
  new SocialMedia(discord_bt, "https://discord.gg/GCDvKWK6me"),
  new SocialMedia(github_bt, "https://github.com/phuocdinh462"),
];
