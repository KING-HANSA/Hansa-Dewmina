const path = require("path");

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.discordapp.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/profile',
        destination: 'https://lrmn.is-a.fun/',
        permanent: true,
      },
      {
        source: '/virtualphotography',
        destination: 'https://vp.lrmn.fun/',
        permanent: true,
      },
      {
        source: '/airdrop',
        destination: 'https://lrmn-airdrop.vercel.app/',
        permanent: true,
      },
      {
        source: '/mybot',
        destination: 'https://mewwme.is-a.fun/',
        permanent: true,
      },
      {
        source: '/instagram',
        destination: 'https://www.instagram.com/hansa_dewmina_lk',
        permanent: true,
      },
      {
        source: '/github',
        destination: 'https://github.com/KING-HANSA',
        permanent: true,
      },
      {
        source: '/spotify',
        destination: 'https://open.spotify.com/artist/5s7jJTs7AML67HYXWjPO2B?si=oex8wb1GQlmMcphhG141AA',
        permanent: true,
      },
      {
        source: '/pinterest',
        destination: 'https://id.pinterest.com/romanromannya',
        permanent: true,
      },
      {
        source: '/patreon',
        destination: 'https://www.patreon.com/mewwme',
        permanent: true,
      },
      {
        source: '/madebytragic',
        destination: 'https://discord.gg/6EXgrmtkPX',
        permanent: true,
      },
    ];
  }, 
  trailingSlash: false // Tambahkan opsi trailingSlash di sini
}; 
