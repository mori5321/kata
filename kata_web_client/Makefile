build:
	wasm-pack build --target web --out-name wasm --out-dir ./static

watch:
	cargo watch -i .gitignore -i "static/*" -s "make build"

serve:
	servor ./static index.html 9000

hotserve:
	concurrently --raw "$(MAKE) watch & $(MAKE) serve" 
