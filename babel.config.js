module.exports = (api) => {
    // We only cache for unit tests because for other builds we have our own cache-loader
    if (api.env('test')) {
        api.cache(true);
    }

    return {
        presets: [
            ['@babel/preset-env', { targets: { node: '12.18.2' }, loose: true }],
            ['@babel/preset-typescript', { isTSX: true, allExtensions: true }],
            ['@babel/preset-react', { runtime: 'automatic' }],
        ],

        plugins: [
            // Allow experimental rest spread syntax
            [
                '@babel/plugin-proposal-object-rest-spread',
                {
                    useBuiltIns: true,
                },
            ],
        ],
    };
};
