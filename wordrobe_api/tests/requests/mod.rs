#[cfg(test)]
mod tests {
    use wordrobe_api::handlers::handlers;
    use wordrobe_api::di::generate_usecase_container_for_test;
    use serde_json::json;
    use serde::{Serialize, Deserialize};

    #[derive(Debug, Serialize, Deserialize, PartialEq)]
    struct MockDTO {
        title: String,
        body: String
    }

    #[tokio::test]
    async fn test_root_path() {
        let usecase_container_for_test = generate_usecase_container_for_test();
        let filter = handlers(usecase_container_for_test);
        let resp = warp::test::request().path("/").reply(&filter).await;
 
        assert_eq!(resp.status(), 200);
        
        let body: Vec<MockDTO> = serde_json::from_slice(resp.body()).unwrap();
        assert_eq!(body, vec!
            [MockDTO { title: "Hello".to_string(), body: "World".to_string()}
        ]);
    }
}
