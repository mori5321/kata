use crate::errors::AppError;
use serde::Serialize;
use warp::Filter;
use crate::di::UsecaseContainer;
use crate::filters::with_usecase_container;
use crate::usecases::list_templates_usecase;
use crate::usecases::Usecase;

pub fn handlers(usecase_container: UsecaseContainer) -> impl Filter<Extract = impl warp::Reply, Error = warp::Rejection> + Clone {
  handle_root_path(usecase_container)
}

fn handle_root_path(
    usecase_container: UsecaseContainer
) -> impl Filter<Extract = impl warp::Reply, Error = warp::Rejection> + Clone {
    warp::path::end()
        .and(with_usecase_container(usecase_container))
        .and_then(root_path)
}

async fn root_path(
    usecase_container: UsecaseContainer
) -> Result<impl warp::Reply, warp::Rejection> {
    let input = list_templates_usecase::Input {};
    let output = usecase_container.list_templates_usecase.run(input);
    println!("{:?}", output.templates);
    respond_with_json(Ok(output.templates), warp::http::StatusCode::OK)
}


fn respond_with_json<T: Serialize>(
  result: Result<T, AppError>,
  status: warp::http::StatusCode,
) -> Result<impl warp::Reply, warp::Rejection> {
  match result {
    Ok(response) => Ok(warp::reply::with_status(
      warp::reply::json(&response),
      status,
    )),
    Err(err) => Err(warp::reject::custom(err)),
  }
}
