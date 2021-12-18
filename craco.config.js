module.exports = {
    webpack: {
        configure: (webpackConfig, { env, paths }) => {
            return {
                ...webpackConfig,
                entry: {
                    main: [
                        env === 'development' &&
                            require.resolve(
                                'react-dev-utils/webpackHotDevClient'
                            ),
                        paths.appIndexJs
                    ].filter(Boolean),
                    background: './src/services/browser.background.service.js',
                    content: './src/services/browser.content.service.js'
                },
                output: {
                    ...webpackConfig.output,
                    filename: 'static/js/[name].js'
                },
                optimization: {
                    ...webpackConfig.optimization,
                    runtimeChunk: false
                }
            }
        }
    },
    style: {
        postcss: {
            plugins: [require('tailwindcss'), require('autoprefixer')]
        }
    }
}
