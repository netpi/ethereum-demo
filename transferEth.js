const Web3 = require('web3');
const config = require('./ropsten.config.js'); // ropsten test network
// const config = require('./local.config.js'); // local test network
const HDWalletProvider = require("@truffle/hdwallet-provider");
const mnemonic = config.mnemonic; 
let provider = new HDWalletProvider(mnemonic, config.rpcurl); 
const web3 = new Web3(provider);

/**
 * 从 Account[0] 向 Accoun[1] 转账 0.01ETH
 */
web3.eth.getAccounts()
.then(accounts => {  
  return web3.eth.sendTransaction({
    from: accounts[0], 
    to: accounts[1],
    value: 0.01e18 // 0.01 ETH
  })
})
.then(console.log) 
/**
 运行成功结果如下：

 { blockHash: '0xdec0a4b1dc1526178e19b2046df310a5281ff7fe8d991ffd5e65a0ceab541c15',
  blockNumber: 8008475,
  contractAddress: null,
  cumulativeGasUsed: 2849066,
  from: '0x15e35634f38f416830aaf09e35b323b516af6d36',
  gasUsed: 21000,
  logs: [],
  logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
  status: true,
  to: '0x75d60374fd1740d1bcdc033084deaaa57a7d8321',
  transactionHash: '0x94a05980b1a215f16b8d75b867d547f787806c186173b3b819e929dd6b87af0f',
  transactionIndex: 44 }
 */
.catch(console.log)