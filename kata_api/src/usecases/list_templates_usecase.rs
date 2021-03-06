use super::Usecase;
use crate::domain::entities::template::Template;
use crate::domain::repositories::template_repository::TemplateRepository;
use std::sync::Arc;

pub struct Input {}
pub struct Output {
    pub templates: Vec<Template>,
}
#[derive(Clone)]
pub struct Deps {
    template_repository: Arc<dyn TemplateRepository>,
}

impl Deps {
    pub fn new(template_repository: Arc<dyn TemplateRepository>) -> Self {
        Deps {
            template_repository,
        }
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
        let templates = self.deps.template_repository.list();

        let output = Output { templates };
        return output;
    }
}
