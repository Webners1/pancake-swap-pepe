import Trans from 'components/Trans'
import { VaultKey } from 'state/types'
import { bscTokens } from '@pancakeswap/tokens'

export const vaultPoolConfig = {
  [VaultKey.CakeVaultV1]: {
    name: <Trans>Auto PEPE</Trans>,
    description: <Trans>Automatic restaking</Trans>,
    autoCompoundFrequency: 5000,
    gasLimit: 380000,
    tokenImage: {
      primarySrc: `/images/tokens/${bscTokens.cake.address}.png`,
      secondarySrc: '/images/autorenew.svg',
    },
  },
  [VaultKey.CakeVault]: {
    name: <Trans>Stake PEPE</Trans>,
    description: <Trans>Stake, Earn – And more!</Trans>,
    autoCompoundFrequency: 5000,
    gasLimit: 600000,
    tokenImage: {
      primarySrc: `/images/tokens/${bscTokens.cake.address}.png`,
      secondarySrc: '/images/autorenew.svg',
    },
  },
  [VaultKey.CakeFlexibleSideVault]: {
    name: <Trans>Flexible PEPE</Trans>,
    description: <Trans>Flexible staking on the side.</Trans>,
    autoCompoundFrequency: 5000,
    gasLimit: 500000,
    tokenImage: {
      primarySrc: `/images/tokens/${bscTokens.cake.address}.png`,
      secondarySrc: '/images/autorenew.svg',
    },
  },
  [VaultKey.IfoPool]: {
    name: 'IFO PEPE',
    description: <Trans>Stake PEPE to participate in IFOs</Trans>,
    autoCompoundFrequency: 1,
    gasLimit: 500000,
    tokenImage: {
      primarySrc: `/images/tokens/${bscTokens.cake.address}.png`,
      secondarySrc: `/images/ifo-pool-icon.svg`,
    },
  },
} as const
