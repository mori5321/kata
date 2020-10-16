use crate::errors::AppError;
use serde::Serialize;
use warp::Filter;

pub fn handlers() -> impl Filter<Extract = impl warp::Reply, Error = warp::Rejection> + Clone {
  root_path()
}

fn root_path() -> impl Filter<Extract = impl warp::Reply, Error = warp::Rejection> + Clone {
  warp::path::end().map(|| "Hello World")
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
