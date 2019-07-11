ARTIFACT_BUCKET = build-artifacts-20190629035607490100000001
PROD_BUCKET = static-assets-prod-20190629035607490200000002
PROJECT_NAME = $(shell npm run -s name)
HASH = $(shell git rev-parse --short HEAD)
BRANCH = $(shell git rev-parse --abbrev-ref HEAD)
ARTIFACTS = s3://$(ARTIFACT_BUCKET)/apps/$(PROJECT_NAME)/$(HASH)
DEPLOY = s3://$(PROD_BUCKET)/apps/$(PROJECT_NAME)/$(BRANCH)

.PHONY: prepare
prepare:
	npm install

.PHONY: build
build:
	npm install
	npm run build

.PHONY: check
check:
	npm run format:check
	npm run types:check
	npm run test

.PHONY: clean
clean:
	rm -rf dist

.PHONY: publish
publish:
	aws --profile jobish s3 sync dist $(ARTIFACTS)

.PHONY: deploy
deploy:
	aws --profile jobish s3 sync $(ARTIFACTS) $(DEPLOY)
	aws --profile jobish s3 sync config $(DEPLOY)/config

.PHONY: pipeline
pipeline:
	@git diff-index --quiet HEAD -- || (echo "Staging area is not empty. Please commit your changes."; exit 1)
	@make prepare
	@make check
	@make build
	@make publish
	@make deploy
