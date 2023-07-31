const KryptoBirdz = artifacts.require("KryptoBirdz");

module.exports = async function(deployer) {
  await deployer.deploy(KryptoBirdz);
};
