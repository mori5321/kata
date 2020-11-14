use crate::app_state::AppState;
use crate::repositories::template_repository;
use crate::usecases::list_templates_usecase;
use crate::usecases::Usecase;
use std::sync::Arc;

#[derive(Clone)]
pub struct UsecaseContainer {
    pub list_templates_usecase: list_templates_usecase::ListTemplatesUsecase,
}

// DieselつかったRepository Patternでうまいことやってる例
// あとで参考にする
// https://gitlab.com/telumnia/web-server/-/tree/master/src

pub fn generate_usecase_container(app_state: &AppState) -> UsecaseContainer {
    let template_repository = Arc::new(template_repository::TemplateRepositoryOnDB::new(
        app_state.pool().clone(),
    ));
    let list_templates_usecase_deps = list_templates_usecase::Deps::new(template_repository);

    let usecase_container = UsecaseContainer {
        list_templates_usecase: list_templates_usecase::ListTemplatesUsecase::new(
            list_templates_usecase_deps,
        ),
    };

    usecase_container
}

pub fn generate_usecase_container_for_test() -> UsecaseContainer {
    let template_repository = Arc::new(template_repository::TemplateRepositoryOnMemory::new());
    let list_templates_usecase_deps = list_templates_usecase::Deps::new(template_repository);

    let usecase_container = UsecaseContainer {
        list_templates_usecase: list_templates_usecase::ListTemplatesUsecase::new(
            list_templates_usecase_deps,
        ),
    };

    usecase_container
}
