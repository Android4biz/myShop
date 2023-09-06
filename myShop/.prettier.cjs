module.exports = {
    bracketSameLine: false,
    bracketSpacing: true,
    endOfLine: 'auto',
    printWidth: 120,
    singleQuote: true,
    ovverides: [
        {
            files: ['**.*.scss', '*.scss'],
            options: {
                singleQuote: false,
            }
        }
    ]
}