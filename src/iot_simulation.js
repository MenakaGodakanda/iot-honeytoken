const Web3 = require('web3');
const contract = require('@truffle/contract');
const honeyTokenArtifact = require('../build/contracts/HoneyToken.json');

// Connect to local blockchain
const web3 = new Web3('http://127.0.0.1:8545');

// Load the contract
const HoneyToken = contract(honeyTokenArtifact);
HoneyToken.setProvider(web3.currentProvider);

// IoT simulation function
async function simulateIoT() {
    const accounts = await web3.eth.getAccounts();
    
    const honeyTokenInstance = await HoneyToken.deployed();
    
    // Authorize an IoT device
    await honeyTokenInstance.authorizeDevice(accounts[1], { from: accounts[0] });
    console.log("Device authorized:", accounts[1]);

    // Simulate accessing honeytoken with an unauthorized device
    try {
        await honeyTokenInstance.accessHoneyToken({ from: accounts[2] });
        console.log("Unauthorized access from:", accounts[2]);
    } catch (error) {
        console.log("Error accessing honeytoken:", error);
    }
}

// Run the simulation
simulateIoT();
