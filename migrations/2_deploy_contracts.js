const HoneyToken = artifacts.require("HoneyToken");

module.exports = function(deployer) {
  deployer.deploy(HoneyToken);
};
