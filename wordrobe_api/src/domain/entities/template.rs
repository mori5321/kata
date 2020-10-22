use serde::{Deserialize, Serialize};

// これをSerializeするのはダメ
#[derive(Debug, Serialize, Deserialize)]
pub struct Template {
    title: Title,
    body: Body,
}

impl Template {
    pub fn new(title: String, body: String) -> Self {
        Template {
            title: Title::new(title),
            body: Body::new(body),
        }
    }
}

// これをSerializeするのはダメ
#[derive(Debug, Serialize, Deserialize)]
struct Title(String);

impl Title {
    fn new(title: String) -> Self {
        Title(title)
    }
}

// これをSerializeするのはダメ
#[derive(Debug, Serialize, Deserialize)]
struct Body(String);

impl Body {
    fn new(body: String) -> Self {
        Body(body)
    }
}
