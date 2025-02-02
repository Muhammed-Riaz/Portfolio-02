
/** @type {import('next').NextConfig} */
// const nextConfig = {
//   images:{
//     domains:["cdn0.iconfinder.com","www.shareicon.net", "en.vetores.org","www.pngitem.com","cdn.freebiesupply.com","images.ctfassets.net","logodownload.org","upload.wikimedia.org"]
//   }
// };

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https", // The protocol used by your image URLs
        hostname: "cdn.sanity.io", // Sanity's image CDN hostname
        pathname: "/images/**", // Match all images under the `/images` path
      },
      
    ],
  },
}

export default nextConfig;
