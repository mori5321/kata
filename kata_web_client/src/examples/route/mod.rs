use css_in_rust::style::Style;
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
                render = Router::render(|switch: AppRoute| {
                    match switch {
                        AppRoute::Profile(id) => html!{
                            {page()}
                        },
                        AppRoute::Index => html!{
                            <h1>{"Index"}</h1>
                        },
                    }
                })
            />
        }
    }
}

fn page() -> Html {
    html! {
        <div class=style()>
            <h1 class="heading">{"Page Sample"}</h1>
            <p class="paragraph">{"This is it.."}</p>
        </div>
    }
}

fn style() -> Style {
    let color = "black";
    let background_color = format!("background-color: {};", color);

    let style = Style::create(
        "Page",
        background_color
            + r#" 
            .heading {
                color: white;
                font-size: 20px;
            }

            .heading:hover {
                color: blue;
            }

            .paragraph {
                color: white;
                font-size: 12px;
            }
        "#,
    )
    .unwrap();

    style
}
