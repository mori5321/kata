use iced::{button, scrollable, text_input};

#[derive(Debug)]
pub enum Todos {
    Loading,
    Loaded(State),
}

#[derive(Debug, Default)]
struct State {
    scroll: scrollable::State,
    input: text_input::State,
    input_value: String,
    filter: Filter,
    tasks: Vec<Task>,
    controls: Controls,
    dirty: bool,
    saving: bool,
}

#[derive(Debug, Clone)]
enum Message {
    Loaded(Result<SavedState, LoadError>),
    Save,
}
