# @testplane/test-filter

Plugin for [Testplane](https://github.com/gemini-testing/testplane) to filter tests specified in `json`-file.

## Install

```bash
npm install @testplane/test-filter
```

## Configuration
* `enabled` **[Boolean]** (optional, `false` by default) - enable/disable the plugin.
* `inputFile` **[String]** (optional, `testplane-filter.json` by default) - path to file with tests to run.

## Usage
* Require plugin in your testplane config file:
```js
plugins: {
    '@testplane/test-filter': {
        enabled: true,
        inputFile: 'some/file.json'
    }
}
```
* Input file format:
```json
[
    {
        "fullTitle": "some-title",
        "browserId": "some-browser"
    }
]
```
