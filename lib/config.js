'use strict';

const _ = require('lodash');
const {root, section, option} = require('gemini-configparser');

const ENV_PREFIX = 'hermione_test_filter_';
const CLI_PREFIX = '--hermione-test-filter-';

const getParser = () => {
    return root(section({
        enabled: option({
            defaultValue: false,
            parseEnv: JSON.parse,
            parseCli: JSON.parse,
            validate: (v) => {
                if (!_.isBoolean(v)) {
                    throw new Error(`"enabled" option must be boolean, but got ${typeof v}`);
                }
            }
        }),
        inputFile: option({
            defaultValue: 'hermione-filter.json',
            validate: (v) => {
                if (!_.isString(v)) {
                    throw new Error(`"inputFile" option must be string, but got ${typeof v}`);
                }
            }
        }),
        filterTestsByCode: option({
            defaultValue: null,
            validate: (v) => {
                if (!_.isRegExp(v) && !_.isString(v) && !_.isFunction(v) && !_.isNull(v)) {
                    throw new Error(`"filterTestsByCode" option must be string, regexp or function, but got ${typeof v}`);
                }
            }
        })
    }), {envPrefix: ENV_PREFIX, cliPrefix: CLI_PREFIX});
};

module.exports = (options) => {
    const {env, argv} = process;

    return getParser()({options, env, argv});
};
