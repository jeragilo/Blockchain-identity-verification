const hre = require("hardhat");

async function main() {
  // Get the contract to deploy
  const Lock = await hre.ethers.getContractFactory("Lock");

  // Get a timestamp 1 day in the future
  const unlockTime = Math.floor(Date.now() / 1000) + 86400; // 24 hours from now

  // Deploy the contract with a valid unlock time
  const lock = await Lock.deploy(unlockTime, { value: hre.ethers.parseEther("0.01") });

  await lock.waitForDeployment();
  console.log(`✅ Contract deployed to: ${await lock.getAddress()}`);
}

// Handle errors
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
