use crate::db::MysqlPool;

pub struct AppState {
    pool: MysqlPool,
}

impl AppState {
    pub fn new(pool: MysqlPool) -> Self {
        Self { pool }
    }

    pub fn pool(&self) -> &MysqlPool {
        &self.pool
    }
}
