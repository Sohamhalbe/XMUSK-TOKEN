require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
require("@nomiclabs/hardhat-etherscan");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks: {
    bscMainnet: {
      url: process.env.BSCMainNet_Key,
      accounts: [process.env.PRIVATE_KEY
        // Your BSC testnet account address
      ],
    },
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://bscscan.com/
    apiKey: process.env.bscscanApiKey 
  },
  
};
