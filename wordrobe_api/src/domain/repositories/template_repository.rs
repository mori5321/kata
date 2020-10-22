use crate::domain::entities::template::Template;

pub trait TemplateRepositoryInterface: Send + Sync {
    fn list(&self) -> Vec<Template>;
}
