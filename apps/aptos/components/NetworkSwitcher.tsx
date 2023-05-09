import { useNetwork } from '@pancakeswap/awgmi'
import { useIsMounted } from '@pancakeswap/hooks'
import { useTranslation } from '@pancakeswap/localization'
import { Box, Text, UserMenu, UserMenuDivider, UserMenuItem } from '@pancakeswap/uikit'
import { APEX_DOMAIN, ASSETS_CDN } from 'config'
import { defaultChain } from 'config/chains'
import Image from 'next/image'

const evmChains = [
  { id: 56, name: 'BNB Smart Chain', chainName: 'bsc' },
]

const NetworkSelect = () => {
  const { t } = useTranslation()

  return (
    <>
      <Box px="16px" py="8px">
        <Text color="textSubtle">{t('Select a Network')}</Text>
      </Box>
      <UserMenuDivider />
      {evmChains.map((chain) => (
        <UserMenuItem
          key={chain.id}
          style={{ justifyContent: 'flex-start' }}
          as="a"
          target="_blank"
          href={`${APEX_DOMAIN}?chain=${chain.chainName}`}
        >
          <Image
            src={`${ASSETS_CDN}/web/chains/${chain.id}.png`}
            width={24}
            height={24}
            unoptimized
            alt={`chain-${chain.id}`}
          />
          <Text color="text" pl="12px">
            {chain.name}
          </Text>
        </UserMenuItem>
      ))}
    </>
  )
}

export const NetworkSwitcher = () => {
  const network = useNetwork() || defaultChain

  const { chain = defaultChain } = network

  const isMounted = useIsMounted()

  return (
    <>
      {() => <NetworkSelect />}
    </>
    
  )
}
