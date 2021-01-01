use crate::consts::colors::{basic_colorset, Color};
use css_in_rust::Style;
use yew::prelude::{html, Html, Properties};
use yewtil::{Pure, PureComponent};

pub type Button = Pure<PureButton>;

#[derive(PartialEq, Properties, Clone)]
pub struct PureButton {
    pub text: String,
    pub background_color: Color,
    pub text_color: Color,
}

impl PureComponent for PureButton {
    fn render(&self) -> Html {
        html! {
            <button class=self.style()>
                {&self.text}
            </button>
        }
    }
}

impl PureButton {
    fn style(&self) -> Style {
        let style = Style::create(
            "Button",
            format!(
                "
                border: none;
                background-color: {};
                color: {};
                border-radius: 24px;
                padding: 8px 16px;
                font-weight: bold;
                outline: none;
                cursor: pointer;

                &:hover {{
                    opacity: 0.9;
                }}
            ",
                basic_colorset().brand_secondary,
                basic_colorset().text_white,
            ),
        )
        .unwrap();

        style
    }
}
