use dotenv::dotenv;
use kata_api::app_state::AppState;
use kata_api::db::gen_mysql_pool;
use kata_api::di::generate_usecase_container;
use kata_api::handlers::handlers;

#[tokio::main()]
async fn main() {
    dotenv().ok();

    let pool = gen_mysql_pool();
    let app_state = AppState::new(pool);

    let port: u16 = 3030;
    println!("Server is running on port: {}", port);

    let usecase_container = generate_usecase_container(&app_state);

    warp::serve(handlers(usecase_container))
        .run(([127, 0, 0, 1], port))
        .await;
}
