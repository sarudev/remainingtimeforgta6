export function CountdownSEO() {
  return (
    <>
      <meta
        name='description'
        content='Live countdown timer showing exactly how much time remains until GTA 6 (Grand Theft Auto VI) release date. Track years, months, days, hours, minutes and seconds.'
      />
      <meta name='keywords' content='GTA 6, Grand Theft Auto 6, countdown, timer, release date, rockstar games' />
      {/* Open Graph para redes sociales */}
      <meta property='og:title' content='GTA 6 Countdown Timer' />
      <meta property='og:description' content='Live countdown to GTA 6 release' />
      <meta property='og:type' content='website' />
      <meta property='og:url' content='https://remainingtimeforgta6.sarudev.com.ar' />
      <meta property='og:image' content='https://remainingtimeforgta6.sarudev.com.ar/vi.png' />

      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content='GTA 6 Countdown Timer' />
      <meta name='twitter:description' content='Live countdown to GTA 6 release' />
      <meta name='twitter:image' content='https://remainingtimeforgta6.sarudev.com.ar/vi.png' />

      <link rel='canonical' href='https://remainingtimeforgta6.sarudev.com.ar' />

      <script type='application/ld+json'>
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebApplication',
          name: 'GTA 6 Countdown Timer',
          description: 'Live countdown timer showing time remaining until GTA 6 release',
          url: 'https://remainingtimeforgta6.sarudev.com.ar',
          applicationCategory: 'UtilityApplication',
          operatingSystem: 'Web Browser',
          offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD'
          },
          about: {
            '@type': 'VideoGame',
            name: 'Grand Theft Auto VI',
            gamePlatform: ['PlayStation 5', 'Xbox Series X/S', 'PC']
          }
        })}
      </script>
    </>
  )
}
