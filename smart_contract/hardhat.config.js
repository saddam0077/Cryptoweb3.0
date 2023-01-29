
require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/zh-hHqaNK1D4KO--gfC8lvn4DyAB7Ius',
      accounts: ['02745d8df8edac30d9bd3c7583ebf48572ab43ad91730ef319cb5e4a6e373632'],
    },
  },
};