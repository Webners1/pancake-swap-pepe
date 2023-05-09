import { DefaultSeoProps } from 'next-seo'

export const SEO: DefaultSeoProps = {
  titleTemplate: '%s | PepeSuperGrowSwap',
  defaultTitle: 'PepeSuperGrowSwap',
  description:
    'Cheaper and faster than Uniswap? Discover PepeSuperGrowSwap, the leading DEX on BNB Smart Chain (BSC) with the best farms in DeFi and a lottery for PEPE.',
  twitter: {
    cardType: 'summary_large_image',
    handle: '@PepeSuperGrowSwap',
    site: '@PepeSuperGrowSwap',
  },
  openGraph: {
    title: '🥞 PepeSuperGrowSwap - A next evolution DeFi exchange on BNB Smart Chain (BSC)',
    description:
      'The most popular AMM on BSC by user count! Earn PEPE through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by PepeSuperGrowSwap), NFTs, and more, on a platform you can trust.',
    images: [{ url: 'https://assets.pancakeswap.finance/web/og/hero.jpg' }],
  },
}
