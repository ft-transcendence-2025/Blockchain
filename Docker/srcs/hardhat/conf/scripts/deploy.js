const hre = require("hardhat"); //package Hardhat R Environment

async function main() {
  console.log("🚀  Deployment Service [INFO]: Starting contract deployment to Avalanche local blockchain...");
  const pongGameLedger = await hre.ethers.deployContract("PongGameLedger");

  console.log("📦  Deployment Service [INFO]: Deploying on going...");
  await pongGameLedger.waitForDeployment();

  console.log(`✅  Deployment Service [SUCCESS]:PongGameLedger deployed to: ${pongGameLedger.target}`);
  //console.log(`🔗   Transaction hash: ${pongGameLedger.deployTransaction.hash}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("❌ Deployment Service [ERROR]: Deployment process due to the following error =>: ", error);
    process.exit(1);
  });