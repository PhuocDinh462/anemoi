import SocialMedia from '@/models/social_media.model';
import { x_bt, line_bt, github_bt, fb_bt, discord_bt } from './images';

export const SocialMediaArr: Array<SocialMedia> = [
  new SocialMedia(
    'X',
    x_bt,
    'https://twitter.com/intent/tweet?text=約束は、風の中に――　Keyフルプライス最新作『anemoi』オフィシャルサイト公開。&url=https://key.visualarts.gr.jp/anemoi/&hashtags=アネモイ'
  ),
  new SocialMedia(
    'Facebook',
    fb_bt,
    'http://www.facebook.com/share.php?u=https://key.visualarts.gr.jp/anemoi/'
  ),
  new SocialMedia(
    'LINE',
    line_bt,
    'https://social-plugins.line.me/lineit/share?url=https://key.visualarts.gr.jp/anemoi/'
  ),
  new SocialMedia('Discord', discord_bt, 'https://discord.gg/GCDvKWK6me'),
  new SocialMedia('GitHub', github_bt, 'https://github.com/phuocdinh462')
];
