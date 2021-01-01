use css_in_rust::Style;
use yew::prelude::{html, Html, Properties};
use yewtil::{Pure, PureComponent};

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
