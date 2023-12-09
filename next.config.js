/** @type {import('next').NextConfig} */
const nextConfig = {
    // this is as suggested in Udemy course:
    webpack: (config) => {
        config.experiments = config.experiments || {}
        config.experiments.topLevelAwait = true
        return config
    },
    experimental: {
        serverComponentsExternalPackages: ['mongoose']
    }
}

module.exports = nextConfig




// this is as suggested in Mongoose Docs:
// experimental: {
//     esmExternals: "loose", // <-- add this
//     serverComponentsExternalPackages: ["mongoose"] // <-- and this
// },
// // and the following to enable top-level await support for Webpack
// webpack: (config) => {
//     config.experiments = {
//         topLevelAwait: true
//     };
//     return config;
// },