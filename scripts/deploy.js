const hre = require("hardhat");

async function main() {
  const XmuskToken = await hre.ethers.getContractFactory("XmuskToken");
  const xmuskToken = await XmuskToken.deploy(2200000000, 100);

  await xmuskToken.deployed();

  console.log("XMUSK Token deployed: ", xmuskToken.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});