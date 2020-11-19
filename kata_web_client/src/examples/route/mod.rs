use crate::consts::colors::*;
use css_in_rust::*;
use yew::prelude::*;
use yew_router::prelude::{Router, RouterAnchor, Switch};

#[derive(Switch, Debug, Clone)]
pub enum AppRoute {
    #[to = "/profile/{id}"]
    Profile(u32),
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
                            {page(format!("Profile {}", id.to_string()))}
                        },
                        AppRoute::Index => html!{
                            {page("Index".to_string())}
                        },
                    }
                })
            />
        }
    }
}

type AppAnchor = RouterAnchor<AppRoute>;

fn page(title: String) -> Html {
    html! {
        <div class=style()>
            <div>
                <h1 class="heading">{title}</h1>
                <p class="paragraph">{"This is it.."}</p>
                <AppAnchor route=AppRoute::Index>
                    {"Index"}
                </AppAnchor>
                <AppAnchor route=AppRoute::Profile(3)>
                    {"Profile"}
                </AppAnchor>
            </div>
        </div>
    }
}

// 結論としてCSS in Rustは使えん...
fn style() -> Style {
    let style = Style::create(
        "Component",
        format!(
            "
            background-color: {};
            width: 100vw;
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;

            .heading {{
                color: {};
                font-size: 32px;
                padding: 16px 0 0;
            }}

            .paragraph {{
                color: {};
                font-size: 12px;
                padding: 0 0 16px;
            }}

            a {{
                display: block;
                text-decoration: underline;
                color: {};
                font-size: 12px;
            }}

            a:hover {{
                color: {}
            }}
        ",
            basic_colorset().background_primary,
            basic_colorset().text_white,
            basic_colorset().text_white,
            basic_colorset().text_white,
            basic_colorset().brand_tertiary,
        ),
    )
    .unwrap();

    style
}
