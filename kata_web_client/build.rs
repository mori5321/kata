#[macro_use]
use css_modules_rs::bundle;

fn main() {
    println!("Build Script Launched");
    bundle!("./src/**/*.css", "./static/style.css");
    println!("Build Script Finished");
}
