#[get("/")]
pub fn test() -> String {
    format!("Hello{}", "world")
}
