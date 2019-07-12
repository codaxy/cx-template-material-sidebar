module.exports = {
    cacheDirectory: true,
    cacheIdentifier: "v2",
    presets: [
        [
            "cx-env",
            {
                targets: {
                    chrome: 50,
                    ie: 11,
                    firefox: 30,
                    edge: 12,
                    safari: 9
                },
                modules: false,
                loose: true,
                corejs: 3,
                useBuiltIns: 'usage',
                cx: {
                    imports: {
                        useSrc: true
                    }
                }
            }
        ]
    ],
    plugins: []
};
