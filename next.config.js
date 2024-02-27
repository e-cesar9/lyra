// /**
//  * @type {import('next').NextConfig}
//  */

// const nextConfig = {
//   output: 'export',

//   images: {
//     unoptimized: true,
//   },
 
//   // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
//   // trailingSlash: true,
 
//   // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
//   // skipTrailingSlashRedirect: true,
 
//   // Optional: Change the output directory `out` -> `dist`
//   // distDir: 'dist',
// }


// module.exports = nextConfig


// module.exports = {
//   assetPrefix: '.',
// };

/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, options) => {
        config.module.rules.push({
            test: /\.(glsl|vs|fs|vert|frag)$/,
            use: ['raw-loader', 'glslify-loader'],
        });
        return config;
    }

    // output: 'export',

}

module.exports = nextConfig
