use yew::prelude::{html, Component, ComponentLink, Html, ShouldRender};
use yew_router::prelude::{Router, RouterAnchor, Switch};

use crate::components::pages::sign_up::SignUpPage;

#[derive(Switch, Debug, Clone)]
pub enum AppRoute {
    #[to = "/signup"]
    SignUp,
    #[to = "/"]
    Index,
}

pub type AppAnchor = RouterAnchor<AppRoute>;
type AppRouter = Router<AppRoute, ()>;

pub struct Model {
    link: ComponentLink<Self>,
}

impl Component for Model {
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
            <AppRouter
                render = AppRouter::render(|switch: AppRoute| {
                    match switch {
                        AppRoute::SignUp => html! {
                            <SignUpPage />
                        },
                        AppRoute::Index => html! {
                            <div>{"Index"}</div>
                        }
                    }
                })
            />
        }
    }
}
