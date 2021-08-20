/* const { injectBabelPlugin } = require("react-app-rewired");

const rootImport = [
    "root-import",
    {
        rootPathPrefix: "~",
        rootPathSuffix: "src"
    }
];

module.exports = config => injectBabelPlugin(rootImport, config); */

// The "injectBabelPlugin" helper has been deprecated as of v2.0. You can use customize-cra plugins in replacement - https://github.com/arackaf/customize-cra#available-plugins

const { override, addBabelPlugins } = require("customize-cra");

module.exports = override(
    ...addBabelPlugins(
        [
            'babel-plugin-root-import',
            {
                'rootPathPrefix': '~',
                'rootPathSuffix': 'src'
            }
        ]
    )
);