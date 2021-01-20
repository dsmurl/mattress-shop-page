const isProd = process.env.NODE_ENV === "production";
console.log("   environment = ", process.env.NODE_ENV);

if (isProd) {
  const withPlugins = require("next-compose-plugins");
  const optimizedImages = require("next-optimized-images");

  module.exports = withPlugins([
    [
      optimizedImages,
      {
        mozjpeg: {
          quality: 80,
        },
        pngquant: {
          speed: 3,
          strip: true,
          verbose: true,
        },
        imagesPublicPath: "/mattress-shop-page/_next/static/images/",
      },
    ],
    {
      basePath: "/mattress-shop-page",
      assetPrefix: "/mattress-shop-page/",
    },
  ]);
} else {
  module.exports = {
    // Setup for dev which nextjs handles
    basePath: "",
    assetPrefix: "",
  };
}
