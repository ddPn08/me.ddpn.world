/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    webpack(config) {
        config.plugins.push(
            require('unplugin-icons/webpack')({
                compiler: 'jsx',
                jsx: 'react',
                customCollections: {
                    thirdparty: require('unplugin-icons/loaders').FileSystemIconLoader(
                        './assets/icons/thirdparty',
                    ),
                },
            }),
        )
        return config
    },
}

module.exports = nextConfig
