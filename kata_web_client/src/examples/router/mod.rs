use yew::prelude::*;
use yew_router::{route::Route, switch::Permissive};

pub struct Model {
    link: ComponentLink<Self>,
    navbar_active: bool,
}

impl Component for Model {
    type Message = Msg;
    type Properties = ();

    fn create(_: Self::Properties, link: ComponentLink<Self>) -> Self {
        Self {
            link,
            navbar_active: false,
        }
    }

    fn update(&mut self, msg: Self::Message) -> ShouldRender {
        match msg {
            Msg::ToggleNavbar => {
                self.navbar_active = !self.navbar_active;
                true
            }
        }
    }

    fn change(&mut self, _: Self::Properties) -> ShouldRender {
        false
    }

    fn view(&self) -> Html {
        html! {
            <>
                { self.view_nav() }

                <main>
                    <AppRouter
                        render=AppRouter::render(Self::switch)
                        redirect=AppRouter::redirect(|route: Route| {
                            AppRoute::PageNotFound(Permissive(Some(route.route))).into_public()
                        })
                    >
                </main>
                <footer>
                    <div class="content has-text-centered">
                        { "Powered by " }
                        <a href="https://yew.rs">{ "Yew" }</a>
                        { " using " }
                        <a href="https://bulma.io">{ "Bulma" }</a>
                        { " and images from " }
                        <a href="https://unsplash.com">{ "Unsplash" }</a>
                    </div>
                </footer>
            </>
        }
    }
}

impl Model {
    fn view_nav(&self) -> Html {
        let Self {
            ref link,
            navbar_active,
            ..
        } = *self;

        let active_class = if navbar_active { "is-active" } else { "" };

        html! {
            <nav class="navbar is-primary" role="navigation" aria-label="main navigation">
                <div class="navbar-brand">
                    <h1 class="navbar-item is-size-3">{ "Yew Blog" }</h1>

                    <a role="button"
                        class=("navbar-burger", "burger", active_class)
                        aria-label="menu" aria-expanded="false"
                        onclick=link.callback(|_| Msg::ToggleNavbar)
                    >
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>
                <div class=("navbar-menu", active_class)>
                    <div class="navbar-start">
                        <AppAnchor classes="navbar-item" route=AppRoute::Home>
                            { "Home" }
                        </AppAnchor>
                        <AppAnchor classes="navbar-item" route=AppRoute::PostList>
                            { "Posts" }
                        </AppAnchor>

                        <div class="navbar-item has-dropdown is-hoverable">
                            <a class="navbar-link">
                                { "More" }
                            </a>
                            <div class="navbar-dropdown">
                                <a class="navbar-item">
                                    <AppAnchor classes="navbar-item" route=AppRoute::AuthorList>
                                        { "Meet the authors" }
                                    </AppAnchor>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        }
    }
}
