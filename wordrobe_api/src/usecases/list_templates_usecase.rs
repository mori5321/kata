use super::Usecase;
use crate::entities::template::Template;

pub struct Input {}
pub struct Output {
    templates: Vec<Template>, 
}
pub struct Deps {}

pub struct ListTemplatesUsecase {
    deps: Deps
}

impl Usecase<Input, Output, Deps> for ListTemplatesUsecase {
    fn new(deps: Deps) -> Self {
        ListTemplatesUsecase { deps }
    }

    fn run(&self, _input: Input) -> Output {
        let output = Output {
            templates: vec![
                Template::new("Hello".to_string(), "World".to_string())
            ]
        };
        return output;
    }
}
