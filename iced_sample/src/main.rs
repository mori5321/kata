mod counter;

use counter::Counter;
use iced::{Sandbox, Settings};

pub fn main() {
    Counter::run(Settings::default())
}
