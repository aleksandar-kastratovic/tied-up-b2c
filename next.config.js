/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_URL: process.env.API_URL,
    NAME: process.env.NAME,
    ADDRESS: process.env.ADDRESS,
    PIB: process.env.PIB,
    EMAIL: process.env.EMAIL,
    TELEPHONE: process.env.TELEPHONE,
    TELEPHONE2: process.env.TELEPHONE2,
    MB: process.env.MB,
    PIB: process.env.PIB,
    WORKTIME: process.env.WORKTIME,
    CAPTCHAKEY: process.env.CAPTCHAKEY,
    INSTAGRAM: process.env.INSTAGRAM,
    SHOW_CHECKOUT_SHIPPING_FORM: process.env.SHOW_CHECKOUT_SHIPPING_FORM,
  },
  images: {
    domains: [
      "scontent.cdninstagram.com",
      "api.tiedup.croonus.com",
      "video.cdninstagram.com",
      "192.168.1.223",
      "api.akt.croonus.com",
    ],
    minimumCacheTTL: 60 * 60 * 24 * 90,
  },
};

module.exports = nextConfig;
