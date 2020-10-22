use crate::db::MysqlPool;
use crate::diesel::RunQueryDsl;
use crate::domain::entities::template::Template;
use crate::domain::repositories::template_repository::TemplateRepositoryInterface;
use crate::models::templates::Templates;
use crate::schema::templates::dsl::*;

pub struct TemplateRepository {
    pub pool: MysqlPool,
}

impl TemplateRepository {
    pub fn new(pool: MysqlPool) -> Self {
        Self { pool }
    }
}

impl TemplateRepositoryInterface for TemplateRepository {
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
