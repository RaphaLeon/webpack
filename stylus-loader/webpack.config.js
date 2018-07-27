const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports= {
    entry: path.resolve(__dirname, 'src/js/index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: './dist/',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015', 'react']
                    }
                }
            },
            {
                test: /\.(mp4|webm)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 1000000,
                        name: 'videos/[name].[hash].[ext]'
                    }
                }
            },
            {
                test: /\.(jpg|png|gif|woff|eot|ttf)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 100000,
                    }
                }
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    //['style-loader', 'css-loader']
                    //fallback: 'style-loader',
                    use: 'css-loader'
                })
            },
            {
                test: /\.styl$/,
                use: ExtractTextPlugin.extract({
                    use: [
                        'css-loader', 
                        {
                            loader: 'stylus-loader',
                            options: {
                                use: [
                                    require('nib'),
                                    require('rupture')
                                ], 
                                import: [
                                    '~nib/lib/nib/index.styl',
                                    '~rupture/rupture/index.styl'
                                ]
                            }
                        }
                    ]
                })
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    //['style-loader', 'css-loader']
                    //fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            },
            {
                test: /\.json$/,
                use: 'json-loader'
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('css/[name].css')
    ]
}