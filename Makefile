.PHONY: prepare
prepare:
	npm install

.PHONY: build
build:
	npm install
	npm run build
	#(cd dist; zip -r ../build.zip .)

.PHONY: check
check:
	npm run format:check
	npm run types:check
	npm run test

.PHONY: clean
clean:
	rm -rf dist