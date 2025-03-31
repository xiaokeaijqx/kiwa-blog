import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;

module.exports = {
    images: {
        domains: ["avatars.githubusercontent.com"], // 添加允许的域名
        // 可选扩展配置（按需调整）：
        formats: ["image/webp"],     // 优化为 WebP 格式
        deviceSizes: [640, 1080],   // 支持的设备宽度
    },
};