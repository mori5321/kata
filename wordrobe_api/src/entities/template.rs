use serde::{Deserialize, Serialize};

#[derive(Debug, Serialize, Deserialize)]
pub struct Template {
    title: String,
    body: String,
}

impl Template {
    pub fn new(title: String, body: String) -> Self {
        Template { title, body }
    }
}
