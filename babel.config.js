module.exports = (api) => {
    // We only cache for unit tests because for other builds we have our own cache-loader
    if (api.env("test")) {
        api.cache(true);
    }

    return {
        presets: [
            [
                "@babel/preset-env",
                {
                    targets:
                        "IE >= 11, Firefox >= 40, Opera >= 36, Chrome >= 35, Safari >=8, Edge >= 18",
                    // @todo - Enable when bumble web stops using ES6 edge cases
                    // loose: true,
                    bugfixes: true,
                    useBuiltIns: "usage",
                    corejs: 3,
                    // Don't convert ES6 modules, so webpack can do tree shaking
                    modules: false,
                },
            ],
            ["@babel/preset-typescript", { isTSX: true, allExtensions: true }],
            ["@babel/preset-react", { runtime: "automatic" }],
        ],

        plugins: [
            // Allow experimental rest spread syntax
            [
                "@babel/plugin-proposal-object-rest-spread",
                {
                    useBuiltIns: true,
                },
            ],
        ],
    };
};
