module.exports = {
    module: {
        rules: [
            {
                test: /\.(scss|css|sass)$/i,
                use: [ "style-loader", "css-loader","postcss-loader", "sass-loader" ]
            },
        ]
    },
    output: {
        filename: '[name].bundle.js',
        clean: true,
    },

    entry: {
        index: '/src/index.js',
        login: '/src/login.js',
        home: '/src/home.js',
        archive: '/src/archive.js',
        popular: '/src/popular.js',
        settings: '/src/settings.js',
    },
}