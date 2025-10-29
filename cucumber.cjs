module.exports = {
    default: {
        paths: ['features/**/*.feature'],
        require: [
            'features/support/steps/*.cjs',
            'features/hooks.cjs'
        ],
        format: [
            'json:reports/cucumber-report.json',
            '@cucumber/pretty-formatter'
        ],
        formatOptions: {
            snippetInterface: 'async-await'
        },
        publishQuiet: true
    }
};