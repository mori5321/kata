use super::Usecase;
use crate::domain::entities::template::Template;

pub struct Input {}
pub struct Output {
    pub templates: Vec<Template>,
}
#[derive(Clone)]
pub struct Deps {}

impl Deps {
    pub fn new() -> Self {
        Deps {}
    }
}

#[derive(Clone)]
pub struct ListTemplatesUsecase {
    deps: Deps,
}

impl Usecase<Input, Output, Deps> for ListTemplatesUsecase {
    fn new(deps: Deps) -> Self {
        ListTemplatesUsecase { deps }
    }

    fn run(&self, _input: Input) -> Output {
        let output = Output {
            templates: vec![
                Template::new("Hello".to_string(), "World".to_string()),
                Template::new("Hello".to_string(), "World".to_string()),
                Template::new("Hello World".to_string(), "This is music.".to_string()),
            ],
        };
        return output;
    }
}
