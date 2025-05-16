module.exports = api => {
    api.cache.using(() => process.env.NODE_ENV);

    const presets = [ 
        '@babel/preset-env',
        ['@babel/preset-react', {"runtime": "automatic"}],
        "@babel/preset-typescript",
    ];

    const plugins = [
        '@babel/plugin-transform-runtime',
        process.env.NODE_ENV === 'development' && 'react-refresh/babel'
    ].filter(Boolean);

    return {
        presets,
        plugins
    }
}