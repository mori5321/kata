use crate::components::common::form::text_input::{TextInput, TextInputType};
use crate::components::common::{button::Button, padding::Padding};
use crate::consts::colors::basic_colorset;
use css_in_rust;
use css_modules_rs;
use yew::prelude::{html, Component, ComponentLink, Html, ShouldRender};

#[derive(Debug)]
pub struct SignUpPage {
    link: ComponentLink<Self>,
    email: String,
    password: String,
    password_confirmation: String,
}

pub enum Msg {
    Nope,
    EmailChanged(String),
    PasswordChanged(String),
    PasswordConfirmationChanged(String),
}

impl Component for SignUpPage {
    type Message = Msg;
    type Properties = ();

    fn create(_: Self::Properties, link: ComponentLink<Self>) -> Self {
        Self {
            link,
            email: "".to_string(),
            password: "".to_string(),
            password_confirmation: "".to_string(),
        }
    }

    fn update(&mut self, msg: Self::Message) -> ShouldRender {
        match msg {
            Msg::Nope => log::debug!("Nope"),
            Msg::EmailChanged(email) => {
                self.email = email;
            }
            Msg::PasswordChanged(password) => {
                self.password = password;
            }
            Msg::PasswordConfirmationChanged(password_confirmation) => {
                self.password_confirmation = password_confirmation
            }
        }
        log::debug!("{:?}", self);
        true
    }

    fn change(&mut self, _: Self::Properties) -> ShouldRender {
        false
    }

    fn view(&self) -> Html {
        let signup_style: css_modules_rs::Style =
            css_modules_rs::cssmod!("./sign_up.css".to_string()).unwrap();
        let subtitle_style = css_modules_rs::cssmod!("./subtitle.css".to_string()).unwrap();

        html! {
            <>
                <div class=style()>
                    <div class="signUpPanel">
                        <h3 class=signup_style.class("hello")>{"Sign Up"}</h3>
                        <h4 class=subtitle_style.class("hello")>{"SubTitle"}</h4>
                        <form class="form">
                            <div>
                                <TextInput
                                    input_type={TextInputType::Text}
                                    label={"Email".to_string()}
                                    oninput={
                                        self.link.callback(|input_data: yew::html::InputData| { Msg::EmailChanged(input_data.value) })
                                    }
                                />
                            </div>
                            <Padding top={8} bottom={8} left={0} right={0} />
                            <div>
                                <TextInput
                                    input_type={TextInputType::Password}
                                    label={"Password".to_string()}
                                    oninput={
                                        self.link.callback(|input_data: yew::html::InputData| { Msg::PasswordChanged(input_data.value) })
                                    }
                                />
                            </div>
                            <Padding top={8} bottom={8} left={0} right={0} />
                            <div>
                                <TextInput
                                    input_type={TextInputType::Password}
                                    label={"Password Confirmation".to_string()}
                                    oninput={
                                        self.link.callback(|input_data: yew::html::InputData| { Msg::PasswordConfirmationChanged(input_data.value) })
                                    }
                                />
                            </div>
                            <Padding top={8} bottom={8} left={0} right={0} />
                            <div>
                                <Button
                                    text="Submit".to_string()
                                    background_color=basic_colorset().brand_secondary
                                    text_color=basic_colorset().text_white
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </>
        }
    }
}

fn style() -> css_in_rust::Style {
    let style = css_in_rust::Style::create(
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
