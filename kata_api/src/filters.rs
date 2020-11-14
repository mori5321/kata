use crate::di::UsecaseContainer;
use std::convert::Infallible;
use warp::Filter;

pub fn with_usecase_container(
    usecase_container: UsecaseContainer,
) -> impl Filter<Extract = (UsecaseContainer,), Error = Infallible> + Clone {
    warp::any().map(move || usecase_container.clone())
}
