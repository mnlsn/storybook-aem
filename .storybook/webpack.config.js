module.exports = {
    entry: "./src/example.js",
    node: {
        module: "empty",
        net: "empty",
        "graceful-fs": "empty",
        fs: "empty",
        "fs-extra": "empty",
        path: "empty"
    },
    mode: "development",
    externals: {
        "graceful-fs": "{}"
    },
    resolve: {
        alias: {
            fs: "browserify-fs",
            "fs-extra": "browserify-fs",
            path: "path-browserify"
        }
    }
};
