build:
	wasm-pack build --target web --out-name wasm --out-dir ./static

watch:
	cargo watch -i .gitignore -i "static/*" -s "make build"

serve:
	miniserve ./static --index index.html
