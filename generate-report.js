import reporter from 'multiple-cucumber-html-reporter';

reporter.generate({
    jsonDir: './reports',
    reportPath: './reports/cucumber-html-report',
    metadata: {
        browser: {
            name: 'chrome',
            version: '120'
        },
        device: 'Local test machine',
        platform: {
            name: 'Windows',
            version: '11'
        }
    },
    customData: {
        title: 'Detalhes da Execução',
        data: [
            {label: 'Projeto', value: 'Sauce Demo'},
            {label: 'Ambiente', value: 'QA'},
            {label: 'Sprint', value: 'Sprint 1'},
            {label: 'Data de Execução', value: new Date().toISOString().split('T')[0]}
        ]
    }
});