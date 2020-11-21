#![recursion_limit = "512"]

extern crate css_rs_macro;
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
