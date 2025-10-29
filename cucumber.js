export default {
    paths: ['features/**/*.feature'],
    require: ['features/**/*.js'],
    format: [
        'json:reports/cucumber-report.json',
        '@cucumber/pretty-formatter'
    ],
    formatOptions: {
        snippetInterface: 'async-await'
    },
    publishQuiet: true
}