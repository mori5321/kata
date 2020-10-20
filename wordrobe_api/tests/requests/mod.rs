#[cfg(test)]
mod tests {
    use serde::{Deserialize, Serialize};
    use serde_json::json;
    use wordrobe_api::di::generate_usecase_container_for_test;
    use wordrobe_api::handlers::handlers;

    // Memo: Is it a good way to have a dependency on DTO?
    #[derive(Debug, Serialize, Deserialize, PartialEq)]
    struct MockDTO {
        title: String,
        body: String,
    }

    #[tokio::test]
    async fn test_root_path() {
        let usecase_container_for_test = generate_usecase_container_for_test();
        let handler = handlers(usecase_container_for_test);
        let resp = warp::test::request().path("/").reply(&handler).await;
        let body: Vec<MockDTO> = serde_json::from_slice(resp.body()).unwrap();

        assert_eq!(resp.status(), 200);
        assert_eq!(
            body,
            vec![
                MockDTO {
                    title: "Hello".to_string(),
                    body: "World".to_string()
                },
                MockDTO {
                    title: "Hello".to_string(),
                    body: "World".to_string()
                },
                MockDTO {
                    title: "Hello World".to_string(),
                    body: "This is music.".to_string()
                },
            ]
        );
    }
}
