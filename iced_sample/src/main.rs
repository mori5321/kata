mod counter;
mod todo;

use counter::counter;
use iced::{sandbox, settings};
use todo::todos;

pub fn main() {
    counter::run(settings::default())
}
