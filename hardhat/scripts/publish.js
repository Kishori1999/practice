const fs = require("fs");
const chalk = require("chalk");
const hardhat = require("hardhat");

const publishDirs = ["../backend/config/contracts/development"];

const securePublishDirs = ["../backend/config/contracts/development"];

function publishContract(contractName) {
  console.log(
    "Publishing",
    chalk.cyan(contractName),
    "to",
    chalk.yellow(publishDirs)
  );
  try {
    const contractRaw = fs
      .readFileSync(
        `${hardhat.config.paths.artifacts}/contracts/${contractName}.sol/${contractName}.json`
      )
      .toString();
    const address = fs
      .readFileSync(`${hardhat.config.paths.artifacts}/${contractName}.address`)
      .toString();
    const contract = JSON.parse(contractRaw);
    publishDirs.forEach((publishDir) => {
      fs.writeFileSync(
        `${publishDir}/${contractName}.address.js`,
        `module.exports = "${address}";`
      );
      fs.writeFileSync(
        `${publishDir}/${contractName}.abi.js`,
        `module.exports = ${JSON.stringify(contract.abi, null, 2)};`
      );
    });

    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
}

async function main() {
  publishDirs.forEach((publishDir) => {
    if (!fs.existsSync(publishDir)) {
      fs.mkdirSync(publishDir);
    }
  });
  const finalContractList = [];
  fs.readdirSync(hardhat.config.paths.sources).forEach((file) => {
    if (file.indexOf(".sol") >= 0) {
      const contractName = file.replace(".sol", "");

      const publishList = [
        "GuildOfGuardiansPreSale",
        "GuardiansToken",
        "UniswapV2PairTestable",
      ];

      // Add contract to list if publishing is successful
      if (
        publishList.indexOf(contractName) > -1 &&
        publishContract(contractName)
      ) {
        finalContractList.push(contractName);
      }
    }
  });
  let systemPrivateKeyModule;
  try {
    systemPrivateKeyModule = fs
      .readFileSync(`${hardhat.config.paths.artifacts}/system-pk.js`)
      .toString();
  } catch (err) {
    console.log("No system-pk found. Skipping it");
  }
  publishDirs.forEach((publishDir) => {
    fs.writeFileSync(
      `${publishDir}/contracts.js`,
      `module.exports = ${JSON.stringify(finalContractList)};`
    );
  });
  securePublishDirs.forEach((publishDir) => {
    fs.writeFileSync(`${publishDir}/system-pk.js`, systemPrivateKeyModule);
  });
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
