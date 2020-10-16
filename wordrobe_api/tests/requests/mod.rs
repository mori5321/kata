#[cfg(test)]
mod tests {
    use wordrobe_api::handlers::handlers;

    #[tokio::test]
    async fn test_root_path() {
        let filter = handlers();
        let resp = warp::test::request().path("/").reply(&filter).await;
        assert_eq!(resp.status(), 200);
        assert_eq!(resp.body(), "Hello World");
    }
}
