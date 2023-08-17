module.exports = {
	"testMatch": [
		"**/test/**/*.spec.js"
	],
	"verbose": true,
	"collectCoverage": true,
	"coverageThreshold": {
		"global": {
			"branches": 85,
			"functions": 85,
			"lines": 85,
			"statements": 85
		}
	}
};