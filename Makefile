PROJECT_NAME = $(shell npm run -s name)
HASH = $(shell git rev-parse --short HEAD)
BRANCH = $(shell git rev-parse --abbrev-ref HEAD)

.PHONY: prepare
prepare:
	npm install

.PHONY: build
build:
	npm run build

.PHONY: check
check:
	npm run format:check
	npm run types:check
	npm run test

.PHONY: clean
clean:
	rm -rf dist

.PHONY: e2e/run
e2e/run:
	(cd e2e; npx jest)

.PHONY: pipeline
pipeline:
	@make clean
	@make prepare
	@git diff-index --quiet HEAD -- || (echo "Staging area is not empty. Please commit your changes."; exit 1)
	@make check
	@make build
