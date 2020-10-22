#[derive(Queryable, Clone)]
pub struct Templates {
    pub id: i64,
    pub title: String,
    pub body: String,
}
