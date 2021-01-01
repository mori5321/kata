#![recursion_limit = "512"]
#[macro_use]
use css_modules_rs;
use wasm_bindgen::prelude::*;

mod components;
mod consts;
mod examples;
mod router;

#[wasm_bindgen(start)]
pub fn run_app() {
    wasm_logger::init(wasm_logger::Config::default());
    yew::start_app::<router::Model>();
}
