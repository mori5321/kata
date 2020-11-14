use crate::domain::entities::template::Template;

pub trait TemplateRepository: Send + Sync {
    fn list(&self) -> Vec<Template>;
}
