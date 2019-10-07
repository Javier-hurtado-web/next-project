const path = require('path')
const glob = require('glob')

module.exports = {
    webpack: (config, {dev})=>{
        config.module.rules.push(
            {
                test: /\.(css\scss)/,
                loader: "emit-file-loader",
                options: {
                    name: "dist/[path][name].[ext]"
                }
            },
            {
                test: /\.css$/,
                use: ['babel-loader', 'raw-loader', 'postcss-loader'],
            },
            {
                test: /\.s(a|c)scc$/,
                use: [
                    "babel-loader",
                    "raw-loader",
                    "postcss-loader",
                    {
                        loader: "sass-loader",
                        options: {
                            includePaths: ['scss','node_modules']
                                .map(d => path.join(__dirname,d))
                                .map(g => glob.sync(g))
                                .reduce((a,c) => a.concat(c), [])
                        }
                    }
                ]
            }
        )
    }
}








const withSass = require('@zeit/next-sass')
module.exports = withSass()
