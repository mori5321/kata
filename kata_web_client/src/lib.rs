#![recursion_limit = "512"]
use wasm_bindgen::prelude::*;

mod examples;

#[wasm_bindgen(start)]
pub fn run_app() {
    wasm_logger::init(wasm_logger::Config::default());
    yew::start_app::<examples::route::Model>();
}
