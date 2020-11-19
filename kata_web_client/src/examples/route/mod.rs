use yew::prelude::*;
use yew_router::prelude::{Router, Switch};

#[derive(Switch, Debug, Clone)]
pub enum AppRoute {
    #[to = "/profile/{id}"]
    Profile(i32),
    #[to = "/"]
    Index,
}

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
            <Router<AppRoute, ()>
                render = Router::render(Self::switch)
            />
        }
    }
}

impl Model {
    fn switch(route: AppRoute) -> Html {
        match route {
            AppRoute::Profile(id) => html! {
                <h1>{ format!("Hello, No.{}", id.to_string()) }</h1>
            },
            AppRoute::Index => html! {
                <h1>{"Index"}</h1>
            },
        }
    }
}
