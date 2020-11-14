use crate::db::MysqlPool;
use crate::diesel::RunQueryDsl;
use crate::domain::entities::template::Template;
use crate::domain::repositories::template_repository::TemplateRepository;
use crate::models::templates::Templates;
use crate::schema::templates::dsl::*;

pub struct TemplateRepositoryOnDB {
    pub pool: MysqlPool,
}

impl TemplateRepositoryOnDB {
    pub fn new(pool: MysqlPool) -> Self {
        Self { pool }
    }
}

impl TemplateRepository for TemplateRepositoryOnDB {
    fn list(&self) -> Vec<Template> {
        let conn = &self.pool.get().expect("Connection Failed");
        let results: Result<Vec<Templates>, &str> = templates
            .load(conn)
            .map_err(|_err| "Templates cannot be read");

        match results {
            Ok(templates_result) => templates_result
                .iter()
                .map(|template| Template::new(template.title.clone(), template.body.clone()))
                .collect(),
            Err(_err) => return vec![],
        }
    }
}

pub struct TemplateRepositoryOnMemory {
    templates: Vec<Template>,
}
impl TemplateRepositoryOnMemory {
    pub fn new() -> Self {
        Self {
            templates: vec![
                Template::new("Hello".to_string(), "World".to_string()),
                Template::new("Hello".to_string(), "World".to_string()),
                Template::new("Hello World".to_string(), "This is music.".to_string()),
            ],
        }
    }
}

impl TemplateRepository for TemplateRepositoryOnMemory {
    fn list(&self) -> Vec<Template> {
        return self.templates.clone();
    }
}
