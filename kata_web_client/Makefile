build.dev:
	wasm-pack build --dev --target web --out-name wasm --out-dir ./static

build.profiling:
	wasm-pack build --profiling --target web --out-name wasm --out-dir ./static

build.release:
	wasm-pack build --release --target web --out-name wasm --out-dir ./static


watch:
	cargo watch -i .gitignore -i "static/*" -i -s "make build.dev"

watch.release:
	cargo watch -i .gitignore -i "static/*" -i -s "make build.release"

serve:
	servor ./static index.html 9000

hotserve:
	concurrently --raw "$(MAKE) watch & $(MAKE) serve"

hotserve.release:
	concurrently --raw "$(MAKE) watch.release & $(MAKE) serve"
