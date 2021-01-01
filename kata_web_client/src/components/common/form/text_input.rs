use crate::consts::colors::basic_colorset;
use css_in_rust::Style;
use std::fmt;
use yew::prelude::{html, Html, Properties};
use yewtil::{Pure, PureComponent};
pub type TextInput = Pure<PureTextInput>;

#[derive(PartialEq, Properties, Clone)]
pub struct PureTextInput {
    pub label: String,
    pub input_type: TextInputType,
    pub oninput: yew::Callback<yew::InputData>,
}

#[derive(PartialEq, Clone)]
pub enum TextInputType {
    Text,
    Password,
    Email,
}

impl fmt::Display for TextInputType {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        match self {
            Self::Text => write!(f, "{}", "text"),
            Self::Password => write!(f, "{}", "password"),
            Self::Email => write!(f, "{}", "email"),
        }
    }
}

impl PureComponent for PureTextInput {
    fn render(&self) -> Html {
        html! {
            <div class=style()>
                <label class="label_style">
                    { self.label.clone() }
                </label>
                <input
                    type=self.input_type.to_string()
                    class="input_style"
                    oninput=&self.oninput
                />
            </div>
        }
    }
}

fn style() -> Style {
    let style = Style::create(
        "TextInput",
        format!(
            "   
            color: {};
            width: 100%;
            text-align: left;

            .input_style {{
                outline: none;
                border: none;
                width: 100%;
                color: {};
                border-radius: 4px;
                border-bottom: {};
                background-color: {};
                padding: 8px;
                font-weight: bold;
                display: block;
            }}

            .label_style {{
                display: block;
                padding: 4px 0;
                font-weight: bold;
            }}
        ",
            basic_colorset().text_white,
            basic_colorset().text_white,
            basic_colorset().border_white,
            basic_colorset().background_secondary,
        ),
    )
    .unwrap();

    style
}

pub type Padding = Pure<PurePadding>;

#[derive(PartialEq, Properties, Clone)]
pub struct PurePadding {
    pub top: i32,
    pub bottom: i32,
    pub left: i32,
    pub right: i32,
}

impl PureComponent for PurePadding {
    fn render(&self) -> Html {
        html! {
            <div class=self.style() />
        }
    }
}

impl PurePadding {
    fn style(&self) -> Style {
        let style = Style::create(
            "Padding",
            format!(
                "
                padding: {}px {}px {}px {}px;
            ",
                &self.top, &self.right, &self.bottom, &self.left,
            ),
        )
        .expect("Error");

        style
    }
}
