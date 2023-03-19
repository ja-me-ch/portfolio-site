/** @type {import('next').NextConfig} */
const nextConfig = {
    i18n: {
        locales: ["en"],
        defaultLocale: "en",
    },
    swcMinify: true,
    compiler: {
        styledComponents: true,
    },
};

module.exports = nextConfig
