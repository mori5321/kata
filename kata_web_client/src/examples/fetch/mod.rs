use serde::Deserialize;
use yew::{
    format::{Json, Nothing},
    prelude::*,
    services::fetch::{FetchService, FetchTask, Request, Response},
};

// https://yew.rs/docs/en/next/concepts/services/fetch/

type Longitude = String;
type Latitude = String;
#[derive(Deserialize, Debug, Clone)]
pub struct ISSPosition {
    longitude: Longitude,
    latitude: Latitude,
}

#[derive(Deserialize, Debug, Clone)]
pub struct ISS {
    message: String,
    timestamp: i32,
    iss_position: ISSPosition,
}

#[derive(Debug)]
pub struct Model {
    fetching: Option<FetchTask>,
    iss: Option<ISS>,
    link: ComponentLink<Self>,
    error: Option<String>,
}

pub enum Msg {
    GetLocation,
    ReceiveResponse(Result<ISS, anyhow::Error>),
}

impl Model {
    fn view_iss_location(&self) -> Html {
        match self.iss {
            Some(ref space_station) => {
                html! {
                    <>
                        <p>{ "The ISS is at" }</p>
                        <p>{ format!("Lng: {}", space_station.iss_position.longitude) }</p>
                        <p>{ format!("Lat: {}", space_station.iss_position.latitude) }</p>
                    </>
                }
            }
            None => {
                html! {
                    <button onclick=self.link.callback(|_| Msg::GetLocation)>
                        { "Where is the ISS" }
                    </button>
                }
            }
        }
    }

    fn view_fetching(&self) -> Html {
        if self.fetching.is_some() {
            html! { <p>{ "Fetching..." }</p> }
        } else {
            html! { <p></p> }
        }
    }

    fn view_error(&self) -> Html {
        if let Some(ref error) = self.error {
            html! { <p>{ error.clone() }</p> }
        } else {
            html! { <p></p> }
        }
    }
}

impl Component for Model {
    type Message = Msg;
    type Properties = ();

    fn create(_props: Self::Properties, link: ComponentLink<Self>) -> Self {
        Self {
            fetching: None,
            iss: None,
            link,
            error: None,
        }
    }

    fn change(&mut self, _props: Self::Properties) -> ShouldRender {
        false
    }

    fn update(&mut self, msg: Self::Message) -> ShouldRender {
        match msg {
            Msg::GetLocation => {
                let request = Request::get("http://api.open-notify.org/iss-now.json")
                    .body(Nothing)
                    .expect("Could not build request");

                let callback =
                    self.link
                        .callback(|response: Response<Json<Result<ISS, anyhow::Error>>>| {
                            let Json(data) = response.into_body();
                            Msg::ReceiveResponse(data)
                        });

                let task = FetchService::fetch(request, callback).expect("Failed to start");
                self.fetching = Some(task);
                true
            }
            Msg::ReceiveResponse(response) => {
                match response {
                    Ok(location) => self.iss = Some(location),
                    Err(error) => self.error = Some(error.to_string()),
                }
                self.fetching = None;
                true
            }
        }
    }

    fn view(&self) -> Html {
        html! {
            <>
                { self.view_fetching() }
                { self.view_iss_location() }
                { self.view_error() }
            </>
        }
    }
}
