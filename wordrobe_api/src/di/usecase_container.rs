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

pub fn generate_usecase_container() -> UsecaseContainer {
    let list_templates_usecase_deps = list_templates_usecase::Deps::new();

    let usecase_container = UsecaseContainer {
        list_templates_usecase: list_templates_usecase::ListTemplatesUsecase::new(list_templates_usecase_deps),
    };

    usecase_container
}

pub fn generate_usecase_container_for_test() -> UsecaseContainer {
    let list_templates_usecase_deps = list_templates_usecase::Deps::new();

    let usecase_container = UsecaseContainer {
        list_templates_usecase: list_templates_usecase::ListTemplatesUsecase::new(list_templates_usecase_deps),
    };

    usecase_container
}
