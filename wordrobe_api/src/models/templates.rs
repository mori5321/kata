#[derive(Queryable, Clone)]
pub struct Templates {
    id: i64,
    title: String,
    body: String,
}
