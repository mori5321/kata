type Color = String;

struct ColorPalette {
    sumi: Color,
    usuzumi: Color,
    nibi: Color,
    shironezumi: Color,
    kawasago: Color,
    gofun: Color,
    sora: Color,
    kaminenozoki: Color,
    mizu: Color,
    jinzamomi: Color,
    momo: Color,
    sakura: Color,
    hanahada: Color,
}

fn palette() -> ColorPalette {
    ColorPalette {
        sumi: "#1C1C1C".to_string(),
        usuzumi: "#2B2B2B".to_string(),
        nibi: "#656765".to_string(),
        shironezumi: "#BDC0BA".to_string(),
        kawasago: "#ECECEC".to_string(),
        gofun: "#FFFFFB".to_string(),
        sora: "#58B2DC".to_string(),
        kaminenozoki: "#A5DEE4".to_string(),
        mizu: "#B1C7D4".to_string(),
        jinzamomi: "#EB7A77".to_string(),
        momo: "#F596AA".to_string(),
        sakura: "#FFDFE1".to_string(),
        hanahada: "#F7C242".to_string(),
    }
}

pub struct ColorSet {
    pub brand_primary: Color,
    pub brand_secondary: Color,
    pub brand_tertiary: Color,
    pub brand_quaternary: Color,
    pub brand_quinary: Color,
    pub accent_primary: Color,
    pub accent_secondary: Color,
    pub background_primary: Color,
    pub background_secondary: Color,
    pub background_tertiary: Color,
    pub background_quaternary: Color,
    pub background_quinary: Color,
    pub text_primary: Color,
    pub text_secondary: Color,
    pub text_tertiary: Color,
    pub text_white: Color,
    pub border_primary: Color,
    pub border_secondary: Color,
}

pub fn basic_colorset() -> ColorSet {
    let palette = palette();
    ColorSet {
        brand_primary: palette.sumi.clone(),
        brand_secondary: palette.sora.clone(),
        brand_tertiary: palette.momo.clone(),
        brand_quaternary: palette.kaminenozoki.clone(),
        brand_quinary: palette.mizu.clone(),
        accent_primary: palette.jinzamomi.clone(),
        accent_secondary: palette.hanahada.clone(),
        background_primary: palette.usuzumi.clone(),
        background_secondary: palette.nibi.clone(),
        background_tertiary: palette.kawasago.clone(),
        background_quaternary: palette.gofun.clone(),
        background_quinary: palette.sumi.clone(),
        text_primary: palette.sumi.clone(),
        text_secondary: palette.usuzumi.clone(),
        text_tertiary: palette.nibi.clone(),
        text_white: palette.gofun.clone(),
        border_primary: palette.shironezumi.clone(),
        border_secondary: palette.nibi.clone(),
    }
}
