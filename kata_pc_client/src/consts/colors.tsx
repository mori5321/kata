type Color = string;

enum ColorPallete {
  sumi = "#1C1C1C",
  usuzumi = "#2B2B2B",
  katsu = "#343B40",
  suzuri = "#434B50",
  nibi = "#656765",
  shironezumi = "#BDC0BA",
  kawasago = "#ECECEC",
  gofun = "#FFFFFB",
  sora = "#58B2DC",
  kamenozoki = "#A5DEE4",
  mizu = "#B1C7D4",
  jinzamomi = "#EB7A77",
  momo = "#F596AA",
  sakura = "#FFDFE1",
  hanahada = "#F7C242",
}

type ColorKeys =
  | "textPrimary"
  | "textSecondary"
  | "textTertiary"
  | "backgroundPrimary"
  | "backgroundSecondary"
  | "backgroundTertiary"
  | "backgroundQuaternary"
  | "backgroundQuinary"
  | "accentPrimary"
  | "accentSecondary";

type ColorSet = { [Key in ColorKeys]: Color };

const basicColorSet: ColorSet = {
  textPrimary: ColorPallete.gofun,
  textSecondary: ColorPallete.kawasago,
  textTertiary: ColorPallete.nibi,
  backgroundPrimary: ColorPallete.katsu,
  backgroundSecondary: ColorPallete.usuzumi,
  backgroundTertiary: ColorPallete.suzuri,
  backgroundQuaternary: ColorPallete.kawasago,
  backgroundQuinary: ColorPallete.sumi,
  accentPrimary: ColorPallete.sora,
  accentSecondary: ColorPallete.kamenozoki,
};

const lightColorSet: ColorSet = {
  textPrimary: ColorPallete.usuzumi,
  textSecondary: ColorPallete.kawasago,
  textTertiary: ColorPallete.kawasago,
  backgroundPrimary: ColorPallete.kawasago,
  backgroundSecondary: ColorPallete.jinzamomi,
  backgroundTertiary: ColorPallete.gofun,
  backgroundQuaternary: ColorPallete.sakura,
  backgroundQuinary: ColorPallete.kamenozoki,
  accentPrimary: ColorPallete.jinzamomi,
  accentSecondary: ColorPallete.hanahada,
};

export { basicColorSet, lightColorSet };
