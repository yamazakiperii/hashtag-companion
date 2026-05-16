const OPTIONS = {
  genre: [
    "reflection",
    "street",
    "architecture",
    "after_rain",
    "night",
    "day_walk",
    "plants_flower",
    "print",
  ],
  subject: [
    "puddle",
    "glass",
    "stairs",
    "shadow",
    "light",
    "building",
    "road",
    "plants",
    "human_silhouette",
    "window",
  ],
  mood: [
    "quiet",
    "minimal",
    "ambient",
    "moody",
    "cinematic",
    "nostalgic",
    "graphic",
    "still",
  ],
  purpose: [
    "feed",
    "story",
    "ad_a",
    "print_available",
    "etsy_lead",
    "reserve",
  ],
};

const OPTION_LABELS = {
  genre: {
    reflection: "リフレクション",
    street: "ストリート",
    architecture: "建築・構造",
    after_rain: "雨上がり",
    night: "夜",
    day_walk: "昼の散歩",
    plants_flower: "植物・花",
    print: "プリント",
  },
  subject: {
    puddle: "水たまり",
    glass: "ガラス・反射面",
    stairs: "階段",
    shadow: "影",
    light: "光",
    building: "建物",
    road: "道",
    plants: "植物",
    human_silhouette: "人影",
    window: "窓",
  },
  mood: {
    quiet: "静か",
    minimal: "ミニマル",
    ambient: "空気感",
    moody: "ムーディー",
    cinematic: "映画的",
    nostalgic: "ノスタルジック",
    graphic: "グラフィック",
    still: "静止感",
  },
  purpose: {
    feed: "通常投稿",
    story: "ストーリー",
    ad_a: "Ad A / 広告入口",
    print_available: "Print available",
    etsy_lead: "Etsy導線",
    reserve: "Reserve / 寝かせ",
  },
};

const TAG_LIBRARY = {
  genre: {
    reflection: [
      "urbanreflection",
      "streetreflection",
      "reflectionphotography",
      "puddlereflection",
    ],
    street: [
      "japanstreetphotography",
      "streetphotography",
      "japanstreets",
      "streetsoftheworld",
    ],
    architecture: [
      "urbangeometry",
      "architecturalphotography",
      "japanarchitecture",
      "architecturaldetails",
    ],
    after_rain: [
      "aftertherain",
      "rainydayphotography",
      "wetstreet",
      "urbanreflection",
    ],
    night: [
      "nightstreetphotography",
      "japanatnight",
      "nightphotography",
      "urbanlight",
    ],
    day_walk: [
      "daylightphotography",
      "urbanwalk",
      "japanstreets",
      "streetsoftheworld",
    ],
    plants_flower: [
      "urbanplants",
      "flowerphotography",
      "botanicaldetails",
      "colorphotography",
    ],
    print: [
      "photoprint",
      "wallartprint",
      "fineartphotography",
      "japanphotography",
    ],
  },
  subject: {
    puddle: [
      "puddlereflection",
      "waterreflection",
      "rainreflection",
      "streetreflection",
    ],
    glass: [
      "glassreflection",
      "urbanreflection",
      "windowreflection",
      "streetreflection",
    ],
    stairs: [
      "stairsphotography",
      "urbangeometry",
      "architecturaldetails",
      "urbanstairs",
    ],
    shadow: [
      "lightandshadow",
      "shadowplay",
      "shadowphotography",
      "urbanlight",
    ],
    light: [
      "urbanlight",
      "availablelight",
      "softlight",
      "lightphotography",
    ],
    building: [
      "japanarchitecture",
      "architecturaldetails",
      "buildingphotography",
      "urbangeometry",
    ],
    road: ["urbanwalk", "streetview", "roadphotography", "japanstreets"],
    plants: [
      "urbanplants",
      "botanicaldetails",
      "greenmoments",
      "quietmoments",
    ],
    human_silhouette: [
      "humansilhouette",
      "urbanfigure",
      "streetfigure",
      "solitaryfigure",
    ],
    window: [
      "windowphotography",
      "windowlight",
      "glassreflection",
      "windowview",
    ],
  },
  mood: {
    quiet: ["quietcity", "quietmoments", "silentstreets", "quietphotography"],
    minimal: [
      "minimalstreet",
      "minimalphotography",
      "simplecomposition",
      "minimalmood",
    ],
    ambient: [
      "ambientphotography",
      "ambientlight",
      "atmosphericphoto",
      "ambientstreets",
    ],
    moody: ["moodyphotography", "moodygrams", "citymood", "moodytones"],
    cinematic: [
      "cinematicphotography",
      "filmiclook",
      "cinematictones",
      "urbanfilm",
    ],
    nostalgic: [
      "nostalgicphotography",
      "nostalgicmood",
      "memorylane",
      "softmood",
    ],
    graphic: [
      "graphiccomposition",
      "urbangeometry",
      "visualgeometry",
      "abstractstreet",
    ],
    still: ["stillmoments", "stillness", "observedmoments", "quietmoments"],
  },
  purpose: {
    feed: ["visualdiary", "observedmoments", "slowphotography", "dailyphoto"],
    story: ["momentcaptured", "visualstory", "walkingaround", "dailywalk"],
    ad_a: [
      "urbanreflection",
      "streetreflection",
      "urbangeometry",
      "japanstreetphotography",
    ],
    print_available: [
      "photoprint",
      "wallartprint",
      "fineartphotography",
      "printsavailable",
    ],
    etsy_lead: [
      "wallartprint",
      "photoprint",
      "japanphotography",
      "fineartprint",
    ],
    reserve: ["quietmoments", "visualdiary", "observedmoments", "stillmoments"],
  },
};

const FIXED_BRAND_TAG = "ambientscenesfromjapan";

const FALLBACK_TAGS = [
  "japanstreetphotography",
  "urbanphotography",
  "urbanreflection",
  "quietcity",
  "urbangeometry",
  "visualdiary",
  "observedmoments",
];

const TAG_TRANSLATIONS = {
  abstractstreet: "抽象的なストリート",
  aftertherain: "雨上がり",
  ambientlight: "空気を含んだ光",
  ambientphotography: "空気感のある写真",
  ambientscenesfromjapan: "日本の空気感のある風景",
  ambientstreets: "空気感のある街路",
  architecturaldetails: "建築のディテール",
  architecturalphotography: "建築写真",
  atmosphericphoto: "雰囲気のある写真",
  availablelight: "その場にある光",
  botanicaldetails: "植物の細部",
  buildingphotography: "建物写真",
  cinematicphotography: "映画的な写真",
  cinematictones: "映画的な色調",
  citymood: "街の空気",
  colorphotography: "色の写真",
  dailyphoto: "日々の写真",
  dailywalk: "日々の散歩",
  daylightphotography: "昼の光の写真",
  filmiclook: "フィルムのような質感",
  fineartphotography: "ファインアート写真",
  fineartprint: "ファインアートプリント",
  flowerphotography: "花の写真",
  glassreflection: "ガラスの反射",
  graphiccomposition: "グラフィックな構図",
  greenmoments: "緑のある瞬間",
  humansilhouette: "人のシルエット",
  japanarchitecture: "日本の建築",
  japanatnight: "夜の日本",
  japanphotography: "日本の写真",
  japanstreetphotography: "日本のストリート写真",
  japanstreets: "日本の街路",
  lightandshadow: "光と影",
  lightphotography: "光の写真",
  memorylane: "記憶をたどる道",
  minimalmood: "ミニマルな雰囲気",
  minimalphotography: "ミニマル写真",
  minimalstreet: "ミニマルな街角",
  momentcaptured: "切り取られた瞬間",
  moodygrams: "ムードのある写真投稿",
  moodyphotography: "ムーディーな写真",
  moodytones: "ムードのある色調",
  nightphotography: "夜の写真",
  nightstreetphotography: "夜のストリート写真",
  nostalgicmood: "懐かしい雰囲気",
  nostalgicphotography: "ノスタルジック写真",
  observedmoments: "見つめた瞬間",
  photoprint: "写真プリント",
  printsavailable: "プリント販売中",
  puddlereflection: "水たまりの反射",
  quietcity: "静かな街",
  quietmoments: "静かな瞬間",
  quietphotography: "静けさの写真",
  rainreflection: "雨の反射",
  rainydayphotography: "雨の日の写真",
  reflectionphotography: "反射の写真",
  roadphotography: "道の写真",
  shadowphotography: "影の写真",
  shadowplay: "影の表情",
  silentstreets: "静かな街路",
  simplecomposition: "シンプルな構図",
  slowphotography: "ゆっくり撮る写真",
  softlight: "柔らかな光",
  softmood: "柔らかな雰囲気",
  solitaryfigure: "ひとりの人影",
  stairsphotography: "階段写真",
  stillmoments: "静止した瞬間",
  stillness: "静止感",
  streetfigure: "街の人影",
  streetphotography: "ストリート写真",
  streetreflection: "街の反射",
  streetsoftheworld: "世界の街路",
  streetview: "街の眺め",
  urbanfigure: "都市の人影",
  urbanfilm: "都市映画のような空気",
  urbangeometry: "都市の幾何学",
  urbanlight: "都市の光",
  urbanphotography: "都市写真",
  urbanplants: "都市の植物",
  urbanreflection: "都市の反射",
  urbanstairs: "都市の階段",
  urbanwalk: "街歩き",
  visualdiary: "写真日記",
  visualgeometry: "視覚的な幾何学",
  visualstory: "視覚的な物語",
  walkingaround: "歩きながらの記録",
  wallartprint: "壁に飾るプリント",
  waterreflection: "水面の反射",
  wetstreet: "濡れた街路",
  windowlight: "窓辺の光",
  windowphotography: "窓の写真",
  windowreflection: "窓の反射",
  windowview: "窓からの眺め",
};

const FIELD_IDS = ["genre", "subject", "mood", "purpose"];
const output = document.querySelector("#hashtag-output");
const translationList = document.querySelector("#translation-list");
const copyButton = document.querySelector("#copy-button");
const regenerateButton = document.querySelector("#regenerate-button");
const copyStatus = document.querySelector("#copy-status");
let lastOutputKey = "";

function buildOptions() {
  FIELD_IDS.forEach((fieldId) => {
    const select = document.querySelector(`#${fieldId}`);

    OPTIONS[fieldId].forEach((value) => {
      const option = document.createElement("option");
      option.value = value;
      option.textContent = OPTION_LABELS[fieldId][value] || value;
      select.append(option);
    });
  });
}

function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function pickUnique(candidates, usedTags) {
  return shuffle(candidates).find(
    (tag) => tag !== FIXED_BRAND_TAG && !usedTags.has(tag),
  );
}

function addFallbackTag(tags, usedTags) {
  const fallbackTag = pickUnique(FALLBACK_TAGS, usedTags);

  if (fallbackTag) {
    tags.push(fallbackTag);
    usedTags.add(fallbackTag);
  }
}

function buildTagSet(selection) {
  const tags = [];
  const usedTags = new Set();

  FIELD_IDS.forEach((fieldId) => {
    const candidates = TAG_LIBRARY[fieldId][selection[fieldId]] || [];
    const selectedTag = pickUnique(candidates, usedTags);

    if (selectedTag) {
      tags.push(selectedTag);
      usedTags.add(selectedTag);
      return;
    }

    addFallbackTag(tags, usedTags);
  });

  while (tags.length < 4) {
    const beforeLength = tags.length;
    addFallbackTag(tags, usedTags);

    if (tags.length === beforeLength) {
      break;
    }
  }

  return tags.slice(0, 4).concat(FIXED_BRAND_TAG);
}

function forceDifferentTagSet(selection, tagNames) {
  const nextTags = [...tagNames];

  for (let index = 0; index < FIELD_IDS.length; index += 1) {
    const fieldId = FIELD_IDS[index];
    const usedTags = new Set(nextTags.filter((_, tagIndex) => tagIndex !== index));
    const replacementTag = pickUnique(
      (TAG_LIBRARY[fieldId][selection[fieldId]] || []).filter(
        (tag) => tag !== nextTags[index],
      ),
      usedTags,
    );

    if (replacementTag) {
      nextTags[index] = replacementTag;
      return nextTags;
    }
  }

  return tagNames;
}

function generateTagNames(selection) {
  let tagNames = buildTagSet(selection);

  for (let attempt = 0; attempt < 24; attempt += 1) {
    const outputKey = tagNames.join("|");

    if (outputKey !== lastOutputKey) {
      break;
    }

    tagNames = buildTagSet(selection);
  }

  if (tagNames.join("|") === lastOutputKey) {
    tagNames = forceDifferentTagSet(selection, tagNames);
  }

  return tagNames;
}

function generateHashtags(selection) {
  return generateTagNames(selection).map((tag) => `#${tag}`);
}

function getSelection() {
  return FIELD_IDS.reduce((selection, fieldId) => {
    selection[fieldId] = document.querySelector(`#${fieldId}`).value;
    return selection;
  }, {});
}

function updateOutput() {
  const tagNames = generateTagNames(getSelection());

  output.value = tagNames.map((tag) => `#${tag}`).join(" ");
  renderTranslations(tagNames);
  lastOutputKey = tagNames.join("|");
  copyStatus.textContent = "";
}

function renderTranslations(tagNames) {
  translationList.replaceChildren();

  tagNames.forEach((tag) => {
    const item = document.createElement("li");
    const tagText = document.createElement("span");
    const translationText = document.createElement("span");

    tagText.className = "translation-tag";
    tagText.textContent = `#${tag}`;
    translationText.textContent = TAG_TRANSLATIONS[tag] || "日本語訳未設定";

    item.append(tagText, translationText);
    translationList.append(item);
  });
}

function fallbackCopy(text) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.left = "-1000px";
  textarea.style.top = "0";
  document.body.append(textarea);
  textarea.focus();
  textarea.select();
  textarea.setSelectionRange(0, text.length);

  const copied = document.execCommand("copy");
  textarea.remove();
  return copied;
}

async function copyHashtags() {
  const text = output.value;

  try {
    const copiedWithFallback = fallbackCopy(text);

    if (!copiedWithFallback) {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(text);
      } else {
        throw new Error("Fallback copy failed.");
      }
    }

    copyStatus.textContent = "コピーしました。";
  } catch {
    copyStatus.textContent =
      "コピーできませんでした。ハッシュタグを選択して手動でコピーしてください。";
  }
}

buildOptions();
FIELD_IDS.forEach((fieldId) => {
  document.querySelector(`#${fieldId}`).addEventListener("change", updateOutput);
});
copyButton.addEventListener("click", copyHashtags);
regenerateButton.addEventListener("click", updateOutput);
updateOutput();
