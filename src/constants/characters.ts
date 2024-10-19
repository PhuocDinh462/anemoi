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
    // alias
    'spica alias',
    // kanji
    '辻倉朱比華',
    // furigana
    'つじくら すぴか',
    // latin
    'Spica',
    // catchphrase,
    '「私はただ風に吹かれていることにするわ」',
    // profile
    `町外れのトレーラーハウスで生活している謎めいた少女。
    <br/>
    町の人達からは距離を置いて生活している。
    <br/>
    麦畑の世話が仕事で、収穫された麦を使って、
    <br/>
    絶品と言われるピザを焼いている。
    <br/>
    が、なかなか食べさせて貰えない。
    <br/>
    口はだいぶ悪いが、動物やお年寄りには優しい。
    <br/>
    夜、風に吹かれながら草笛を吹く姿がよく目撃されている。`,
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
    // alias
    '空を目指すフワフワ少女',
    // kanji
    '総羽愛乃',
    // furigana
    'ふさば あいの',
    // latin
    'Aino',
    // catchphrase,
    '「飛んで見れば分かりますよ。この子のすごさが！」',
    // profile
    `町外れでまわる風車の修理をしている少女。
    <br/>
    機械関係に強く、自作の飛行機で空へはばたくために、あぶなっかしい実験をしている。
    <br/>
    時々傘をさしながら、空から降ってくる。
    <br/>
    姿も言葉も、全体的にフワフワしている。と、町の人に言われている。
    <br/>
    工房の２階で父親と２人で暮らしているらしい。`,
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
    // alias
    '地図を作る少女',
    // kanji
    '淡雪陽彩',
    // furigana
    'あわゆき ひいろ',
    // latin
    'Hiiro',
    // catchphrase,
    '「キミの選択はとてもいいわね」',
    // profile
    `天文台に住む少女。
    <br/>
    綺麗なものを探すことを生き甲斐としており、それを地図に書き込み続けている。
    <br/>
    異常な程に知識が豊富で、知らないことは存在しないと豪語しており、自称偏差値８那由多の天才。
    <br/>
    当たり前のように自分を美しいと思っているが、エキセントリックすぎる行動と好奇心に忠実すぎる性格の為、彼女の行動に付き合える人間は少ない。
    <br/>
    時折「お隣さんに行ってくるわ」と言って、どこかへと出かけてしまうことがある。
    <br/>
    好きな食べ物は金平糖。`,
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
    // alias
    '郵便まっしぐらなひたむき少女',
    // kanji
    '白渡小詠',
    // furigana
    'しらと こよみ',
    // latin
    'Koyomi',
    // catchphrase,
    `「大切なお手紙の届け先を探してるんです。
      <br/>
      ……ずっと、ずっと」`,
    // profile
    `町唯一の郵便屋を営む少女。
      <br/>
      町の人々には感謝されているものの、本人にはあまりその自覚がない。
      <br/>
      ただただ郵便が自分の使命であるかのように、ひたむきに仕事をこなしていく。
      <br/>
      生粋のおじいちゃんっ子で、配達前は必ず亡くなってしまったおじいちゃんのお墓参りに訪れている。
      <br/>
      世間のことに疎く、人の言うことを何でも信じてしまうことがある。
      <br/>
      そんなところも、町のみんなから微笑ましく見守られている愛されキャラ。`,
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
    // alias
    '兄をダメにする万能妹',
    // kanji
    '速川六花',
    // furigana
    'はやかわ りっか',
    // latin
    'Rikka',
    // catchphrase,
    '「兄さん、ご立派です！」',
    // profile
    `主人公の妹で、共に舞台となる町にやってきた少女。
        <br/>
        兄の発言や行動は、どんなことでも全肯定してくれる。
        <br/>
        町に滞在中は保育園で臨時バイトをして、子供たちの面倒を見ながら、兄嫁検定ノートを片手に兄の嫁探しをしている。
        <br/>
        兄以外の男性には塩対応だが、兄にとって有益となると判断した人へはとても丁寧。
        <br/>
        秘伝の「すき焼きのタレ」を持っていて、これさえあれば何でも作れると信じている。`,
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
