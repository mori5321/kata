use wordrobe_api::di::generate_usecase_container;
use wordrobe_api::handlers::handlers;

#[tokio::main()]
async fn main() {
    let port: u16 = 3030;
    println!("Server is running on port: {}", port);

    let usecase_container = generate_usecase_container();

    warp::serve(handlers(usecase_container))
        .run(([127, 0, 0, 1], port))
        .await;
}
