use crate::consts::colors::basic_colorset;
use css_in_rust::Style;
use std::fmt;
use yew::prelude::{html, Component, ComponentLink, Html, ShouldRender};

pub struct SignUpPage {
    link: ComponentLink<Self>,
}

impl Component for SignUpPage {
    type Message = ();
    type Properties = ();

    fn create(_: Self::Properties, link: ComponentLink<Self>) -> Self {
        Self { link }
    }

    fn update(&mut self, _msg: Self::Message) -> ShouldRender {
        true
    }

    fn change(&mut self, _: Self::Properties) -> ShouldRender {
        false
    }

    fn view(&self) -> Html {
        html! {
            <>
                <div class=style()>
                    <div class="signUpPanel">
                        <h3>{"Sign Up"}</h3>
                        <form class="form">
                            <div>
                                { text_input(
                                    TextInputProps {
                                        input_type: TextInputType::Text,
                                        label: "Email".to_string()
                                    }
                                )}
                            </div>
                            <div>
                                { text_input(
                                    TextInputProps {
                                        input_type: TextInputType::Password,
                                        label: "Password".to_string()
                                    }
                                )}
                            </div>
                        </form>
                    </div>
                </div>

            </>
        }
    }
}

fn style() -> Style {
    let style = Style::create(
        "SignUpPage",
        format!(
            "
            color: {};
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
            text-align: center;

            .signUpPanel {{
                width: 80%;
                max-width: 520px;
                background-color: transparent;
                padding: 16px;
                border-radius: 4px;
            }}

            .form {{
                justify-content: center;
            }}
        ",
            basic_colorset().text_white,
        ),
    )
    .unwrap();

    style
}

enum TextInputType {
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

struct TextInputProps {
    label: String,
    input_type: TextInputType,
}
fn text_input(props: TextInputProps) -> Html {
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
                padding: 4px;
                font-weight: bold;
                display: block;
            }}

            .label_style {{
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

    html! {
        <div class=style>
            <label class="label_style">
                { props.label }
            </label>
            <input
                type=props.input_type.to_string()
                class="input_style"
            />
        </div>
    }
}
