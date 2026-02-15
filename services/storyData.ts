
import { Scene } from '../types';
import { BACKGROUND_IMAGES } from '../constants';

export const storyData: Record<string, Scene> = {
  'start': {
    id: 'start',
    background: BACKGROUND_IMAGES.AIRPORT,
    dialogue: '【第1章：归国之潮】\n港城的冬日是一场湿冷的噩梦。二月的寒流夹杂着海水的咸腥，在停机坪上肆虐。我拉着行李箱，步履略显僵硬地走出通道。四周是喧嚣的接机人群，但在那一刻，我所有的感官都被远处那个靠在漆黑劳斯莱斯旁的男人夺走。\n\n陆沉。他穿着一件深灰色的呢绒大衣，领口严整地扣到最后一颗。金丝眼镜在冷白色的灯光下闪烁着理智而疏离的光。十六年了，他救我于废墟，抚我于微末，如今，我终于以“成年人”的身份，重新踏入了这片由他统治的领地。',
    nextSceneId: 'ch1_choice',
  },
  'ch1_choice': {
    id: 'ch1_choice',
    background: BACKGROUND_IMAGES.AIRPORT,
    characterName: '陆沉',
    characterImage: 'calm',
    dialogue: '他抬起头，视线越过熙攘的人潮，精准地锁定了我的方位。那一瞬间，我仿佛看到他一贯克制的眼底闪过一丝不易察觉的波澜，像是深潭中坠入了一粒微尘。他迈开长腿朝我走来，每一步都踏在我的心跳声上。他在我面前站定，那股熟悉的、冷冽的檀香味瞬间将我包裹。\n\n“栩桐，”他的嗓音低沉悦耳，却带着一种不容置疑的掌控感，“过来。”',
    choices: [
      { text: '（顺从）小跑过去，习惯性地抓住他的大衣衣角，仰头一笑：“陆先生，我听话回来了。”', type: 'submissive', nextSceneId: 'ch2', effect: { love: 5, dependence: 12, rationality: -2 } },
      { text: '（试探）站在原地，隔着三步的距离凝视他：“陆先生比以前更英俊了，英俊得让我有些不敢相认。”', type: 'tentative', nextSceneId: 'ch2', effect: { love: 8, control: 5, rationality: 0 } },
      { text: '（反抗）礼貌而疏离地欠身：“陆先生亲自来接，苏小姐那边不会有微词吗？”', type: 'rebellious', nextSceneId: 'ch2', effect: { control: 15, love: -5, rationality: 5 } }
    ]
  },
  'ch2': {
    id: 'ch2',
    background: BACKGROUND_IMAGES.CAR,
    characterName: '陆沉',
    characterImage: 'calm',
    dialogue: '【第2章：沉香迷障】\n车厢内的光线昏暗，只有仪表盘发出的幽幽蓝光照亮了他的侧脸。他慢条斯理地摘下眼镜，用真丝手帕擦拭着，修长的手指在微光下显得苍白而有力。车轮碾过路面的震动极其细微，静谧的环境让我的呼吸声都显得格外突兀。\n\n“那四年，”他重新带上眼镜，侧头看我，目光在暗影中显得深不可测，“除了艺术史，你还学会了怎么用带刺的话来试探我？栩桐，是谁给你的底气？”',
    nextSceneId: 'ch3'
  },
  'ch3': {
    id: 'ch3',
    background: BACKGROUND_IMAGES.OFFICE,
    characterName: '陆沉',
    characterImage: 'calm',
    dialogue: '【第3章：家族枷锁】\n陆氏财团总部的顶层办公室，巨大的落地窗外是港城纸醉金迷的夜景。办公桌上，一份烫金的联姻协议极其刺眼。苏凝，那个出身名门、完美得像精致人偶的女人，是家族为他挑选的最佳伴侣。\n\n他背对着我站在窗前，指尖夹着一根并未点燃的雪茄。烟草的味道在空气中弥漫，他的背影孤寂而威严。“家里老头子的意思，联姻能让陆氏在东南亚的航路彻底稳固。栩桐，你作为我养大的孩子，不打算给我一点建议吗？”',
    choices: [
      { text: '（顺从）垂下头，掩饰住眼底的酸涩：“只要是对陆先生有利的决定，我都会毫无保留地支持。”', type: 'submissive', nextSceneId: 'ch4', effect: { dependence: 8, love: 2, rationality: -8 } },
      { text: '（试探）走上前，手指抚过那份协议的边缘：“陆先生，如果是我的话，绝对不会让这种纸片束缚住我的灵魂。你呢？”', type: 'tentative', nextSceneId: 'ch4', effect: { love: 12, control: 10, rationality: -12 } },
      { text: '（反抗）冷冷一笑：“建议？陆先生既然已经决定好了未来主母的人选，又何必来寻求一个‘养女’的意见？”', type: 'rebellious', nextSceneId: 'ch4', effect: { control: 18, love: -8, rationality: 10 } }
    ]
  },
  'ch4': {
    id: 'ch4',
    background: BACKGROUND_IMAGES.MANSION,
    dialogue: '【第4章：嫉妒之火】\n苏家的慈善舞会，衣香鬓影。我穿着他亲自选定的高定礼服，像是一件完美的展示品站在他身边。苏凝亲昵地挽着他的手臂，在社交场合中游刃有余。就在此时，年轻的林家继承人林枫向我走来，向我发出舞邀。\n\n我感觉到身后那道目光瞬间变得冰冷而粘稠，像是毒蛇在皮肤上爬过。陆沉并未说话，只是轻轻抿了一口红酒，但他周围的空气仿佛在瞬间结了冰。',
    nextSceneId: 'ch5'
  },
  'ch5': {
    id: 'ch5',
    background: BACKGROUND_IMAGES.CAR,
    characterName: '陆沉',
    characterImage: 'angry',
    dialogue: '【第5章：雨夜的审判】\n回程的路上，大雨如注，雨刷器机械地扫动，发出单调刺耳的声音。他突然示意司机下车，整辆劳斯莱斯瞬间变成了一座与世隔绝的孤岛。他解开领带，呼吸有些沉重，那是他极少展露的情绪失控。\n\n“林枫的手扶在你的腰上整整三分钟，”他俯身逼近，将我困在座椅与他坚实的胸膛之间，金丝眼镜后的双眼燃烧着压抑的怒火，“栩桐，你很享受那种被同龄人追求的感觉，是吗？”',
    choices: [
      { text: '（顺从）不安地揪住裙角：“那只是基本的礼仪...陆先生，你吓到我了。”', type: 'submissive', nextSceneId: 'ch6', effect: { dependence: 15, control: 8 } },
      { text: '（试探）大着胆子抚摸他的领口：“陆先生如果真的不悦，不如直接在那三分钟内带我离开？”', type: 'tentative', nextSceneId: 'ch6', effect: { love: 18, control: 12, rationality: -15 } },
      { text: '（反抗）“我是独立的个体，陆先生。我有权利接受任何人的舞邀，而不仅仅是作为你的挂件。”', type: 'rebellious', nextSceneId: 'ch6', effect: { control: 25, rationality: 15 } }
    ]
  },
  'ch6': {
    id: 'ch6',
    background: BACKGROUND_IMAGES.MANSION,
    dialogue: '【第6章：无形的网】\n接下来的日子，我的生活轨迹被精准地重塑。私人医生、私人厨师、甚至连我在大学的导师都被陆沉亲自“问候”过。每一件送到我房间的衣物，都有他亲手挑选的痕迹。他赋予我奢靡，却也剥夺了我的氧气。我在这种病态的偏爱中挣扎，却发现依赖早已深入骨髓。',
    nextSceneId: 'ch7'
  },
  'ch7': {
    id: 'ch7',
    background: BACKGROUND_IMAGES.OFFICE,
    characterName: '陆沉',
    characterImage: 'calm',
    dialogue: '【第7章：强制的回归】\n他坐在书桌后，翻阅着我的护照，随后当着我的面将其锁入保险箱。“外面的世界太乱，栩桐。你的社交圈需要净化。从明天起，搬回主宅居住，就在我隔壁。”\n\n他的声音极其温柔，却透着一股令人胆寒的肃杀之气。',
    nextSceneId: 'ch8'
  },
  'ch8': {
    id: 'ch8',
    background: BACKGROUND_IMAGES.MANSION,
    dialogue: '【第8章：暗影中的凝视】\n深夜，我因为噩梦惊醒。房门被悄无声息地推开，陆沉没有开灯，只是静静地坐在床边的单人沙发里。指尖的一点烟火在黑暗中忽明忽暗。他凝视着我熟睡的轮廓，直到我睁开眼。那一刻，我在他眼中看到了毁灭般的孤独。',
    nextSceneId: 'ch9'
  },
  'ch9': {
    id: 'ch9',
    background: BACKGROUND_IMAGES.AIRPORT,
    dialogue: '【第9章：最后的逃离】\n我瞒着所有人申请了维也纳的交换项目。就在出发的前一晚，行李箱已经打包完毕。我以为我能逃离这座金色的牢笼，却在推开家门时，看到了那个坐在客厅中央、正优雅地品着咖啡的男人。',
    nextSceneId: 'ch10'
  },
  'ch10': {
    id: 'ch10',
    background: BACKGROUND_IMAGES.OFFICE,
    characterName: '陆沉',
    characterImage: 'uncontrolled',
    isForced: true,
    dialogue: '【第10章：暴雨中的崩塌】\n他手里的那份交换申请书被撕成了粉碎，雪白的碎纸屑像是一场滑稽的葬礼。他的眼神里彻底失去了理智的伪装，那是一种野兽般的狂暴与贪婪。“栩桐，我教了你十六年，让你学会所有的优雅与聪慧，就是为了让你有朝一日能用这些来对付我？”\n\n他猛地攥住我的手腕，力道大得几乎要将骨头捏断，“除非我死，否则你这辈子都别想踏出这个家门一步。”',
    choices: [
      { text: '（顺从）跪倒在他膝边，泣不成声：“我不走了...只要陆先生息怒，我什么都愿意做。”', type: 'submissive', nextSceneId: 'ch11', effect: { dependence: 25, love: 10, rationality: -15 } },
      { text: '（试探）忍着痛楚贴近他，唇瓣几乎擦过他的耳廓：“陆沉，承认吧，你其实是怕我爱上别人。你这个胆小鬼。”', type: 'tentative', nextSceneId: 'ch11', effect: { love: 20, control: 20, rationality: -25 } },
      { text: '（反抗）“你这是绑架！十六年前你救了我，现在你却要亲手毁掉我吗？”', type: 'rebellious', nextSceneId: 'ch11', effect: { control: 30, rationality: 20, love: -10 } }
    ]
  },
  'ch11': {
    id: 'ch11',
    background: BACKGROUND_IMAGES.MANSION,
    dialogue: '【第11章：名为溺爱的刑罚】\n我被禁足在别墅二层。所有的通讯工具都消失了。陆沉每天中午都会回来陪我用餐，他甚至会耐心地为我剥开虾壳，动作温柔得让人战栗。这种极致的宠溺中透着浓稠的控制，我感到我的意志正在这种温水中慢慢消融。',
    nextSceneId: 'ch12'
  },
  'ch12': {
    id: 'ch12',
    background: BACKGROUND_IMAGES.MANSION,
    characterName: '陆沉',
    characterImage: 'uncontrolled',
    isForced: true,
    dialogue: '【第12章：失控的深度】\n苏家因为联姻破裂撤资。陆沉面临前所未有的压力。深夜，他带着一身寒气冲进房间，将我紧紧压在门板上。他滚烫的呼吸喷在我的颈窝处，声音沙哑而绝望：“栩桐...别再试图挑战我的底线。我真的会把你关进谁也找不到的深渊。”',
    nextSceneId: 'ch13'
  },
  'ch13': {
    id: 'ch13',
    background: BACKGROUND_IMAGES.OFFICE,
    dialogue: '【第13章：暗涌的博弈】\n我从老管家那里偷到了平板电脑。苏家联合了陆氏内部的反对势力，试图以“陆沉私德败坏”为由将其罢免。他们准备在股东大会上公开陆沉对我的“非正常囚禁”。这是一个双刃剑，要么毁了他，要么救了我。',
    nextSceneId: 'ch14'
  },
  'ch14': {
    id: 'ch14',
    background: BACKGROUND_IMAGES.OFFICE,
    characterName: '陆沉',
    characterImage: 'calm',
    dialogue: '【第14章：反击的序曲】\n股东大会现场。苏家家主正在展示所谓的“证据”。陆沉坐在主位上，面无表情地听着指控，指尖有节奏地敲击着桌面。就在此时，我推开大门，身着一袭胜雪的白裙，走到了聚光灯下。\n\n我看向那个震惊的男人，缓缓开口：“所有的禁足，都是我自愿的选择。我爱陆先生，是以恋人的身份。”',
    nextSceneId: 'ch15'
  },
  'ch15': {
    id: 'ch15',
    background: BACKGROUND_IMAGES.MANSION,
    characterName: '陆沉',
    characterImage: 'uncontrolled',
    isForced: true,
    dialogue: '【第15章：最后的摊牌】\n回到主宅，他像是变了一个人。他在客厅里疯狂地摔碎了所有的装饰品，却唯独没有碰我一片衣角。他把我堵在角落里，力道大得惊人：“你知不知道刚才那样说的后果？你会变成全城的笑柄，会被唾沫淹没！”',
    choices: [
      { text: '（顺从）紧紧抱住他的脖子：“为了和你站在一起，我不介意和全世界为敌。”', type: 'submissive', nextSceneId: 'ch16', effect: { love: 30, dependence: 15 } },
      { text: '（试探）轻咬他的下唇：“陆先生，你不是一直想让我成为你的附属物吗？现在，我如你所愿。”', type: 'tentative', nextSceneId: 'ch16', effect: { love: 35, control: 15, rationality: -30 } },
      { text: '（反抗）“我这么做只是为了还你的人情。陆氏不能倒，你也不能倒。”', type: 'rebellious', nextSceneId: 'ch16', effect: { control: 20, love: -15, rationality: 15 } }
    ]
  },
  'ch16': {
    id: 'ch16',
    background: BACKGROUND_IMAGES.MANSION,
    dialogue: '【第16章：舆论的风暴】\n全城热议。苏凝彻底消失在社交圈。陆沉不仅没有退缩，反而以雷霆手段接管了苏家的几条关键供应链。他公开宣布我是他的未婚妻，所有的嘲笑声在陆氏的权势面前都显得苍白无力。',
    nextSceneId: 'ch17'
  },
  'ch17': {
    id: 'ch17',
    background: BACKGROUND_IMAGES.OFFICE,
    characterName: '陆沉',
    characterImage: 'calm',
    dialogue: '【第17章：名分的加冕】\n陆沉在年度庆典上，当着全球媒体的面，将那枚价值连城的“克制之眼”蓝钻戒指戴在了我的无名指上。他的目光温柔得几乎能让人沉溺：“从前我是你的守护者。从今往后，我是你的丈夫。”',
    nextSceneId: 'ch18'
  },
  'ch18': {
    id: 'ch18',
    background: BACKGROUND_IMAGES.CAR,
    dialogue: '【第18章：归于平静】\n我们去了一趟海边。那是十六年前我们相遇后的第一个春天。海浪拍打着沙滩，陆沉第一次穿得如此休闲。他躺在沙滩椅上，金丝眼镜滑落在鼻尖，这一刻的他，没有了掌控欲，只有满溢的幸福。',
    nextSceneId: 'ch19'
  },
  'ch19': {
    id: 'ch19',
    background: BACKGROUND_IMAGES.MANSION,
    characterName: '陆沉',
    characterImage: 'calm',
    dialogue: '【第19章：婚礼的前夜】\n红丝绒的婚纱静静地悬挂在窗前。他从背后环抱住我，下巴抵在我的肩膀上。他低声诉说着那些我不曾知晓的岁月——原来在那漫长的十六年里，每一个深夜，他都在与内心那头贪婪的野兽搏斗，只为了给我一个清白的未来。',
    nextSceneId: 'ch20_he'
  },
  'ch20_he': {
    id: 'ch20_he',
    background: BACKGROUND_IMAGES.MANSION,
    characterName: '陆沉',
    characterImage: 'calm',
    dialogue: '【第20章：余生之囚】\n婚礼在私人海岛举行。阳光穿透圣洁的白纱，陆沉握着我的手，嗓音低沉而颤抖。这不是一场束缚，而是一场盛大的归还。我自愿走进他构建的名为“爱”的囚笼，因为只有在那里，我才是完整的。\n\n“余生漫长，栩桐。”他亲吻我的指尖，目光如酒般醉人，“你是我的救赎，也是我唯一的弱点。请永远，不要离开。”\n\n【HAPPY ENDING：永恒契约】',
    nextSceneId: 'game_end'
  },
  'game_end': {
    id: 'game_end',
    background: BACKGROUND_IMAGES.MANSION,
    dialogue: '感谢体验《陆沉：金笼之约》。\n真爱从未被束缚，只是找到了它唯一的归属。',
  }
};
