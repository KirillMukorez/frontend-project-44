install:
	npm ci
node bin:
 	node binbrain-games.js
publish:
	npm publish --dry-run