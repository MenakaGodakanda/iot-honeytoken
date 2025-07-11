# Smart Contract-based Honeytoken System for IoT Device Security

## Project Description

This project implements a Smart Contract-based Honeytoken System to enhance the security of IoT devices using blockchain technology. The system deploys Ethereum smart contracts to monitor and detect unauthorized access to honeytokens—dummy IoT data or fake control commands. This innovative approach provides a decentralized, tamper-proof intrusion detection mechanism tailored for IoT environments.

### Key Features:
- **Decentralized Security**: Uses Ethereum blockchain to decentralize the detection mechanism.
- **Honeytokens**: Deploys fake IoT data to attract attackers.
- **Smart Contracts**: Automatically logs and responds to unauthorized access attempts.
- **Tamper-Proof Logs**: Intrusion detection events are stored immutably on the blockchain.

## Technologies and Tools Used

- **Programming Languages**: Solidity, Python, JavaScript (Node.js)
- **Blockchain Platform**: Ethereum (Ganache for local development)
- **Development Frameworks**: Truffle Suite, Web3.js
- **Operating System**: Ubuntu 22.04 LTS
- **Simulation Environment**: Python-based IoT device simulator

## Getting Started

Follow these steps to set up and run the project on your local machine.

### Prerequisites

Ensure the following are installed on your system:

- Node.js and npm (Node Package Manager)
- Python 3.x
- Truffle Suite
- Ganache (for local Ethereum blockchain)
- MetaMask (optional, for blockchain interaction in the browser)

### Installation Steps

#### 1. Clone this repository:
```
git clone https://github.com/MenakaGodakanda/honeytoken-iot-security.git
cd honeytoken-iot-security
```

#### 2. Install dependencies:
- Install Node.js and NPM
Node.js is necessary for setting up the blockchain and smart contract environment.
```
sudo apt install nodejs npm
```

- Verify the installation:
```
node -v
npm -v
```

- Install Ganache
Ganache is a personal blockchain for Ethereum development.
```
sudo npm install -g ganache-cli
```

- Install Truffle
Truffle is used for developing, testing, and deploying smart contracts.
```
sudo npm install -g truffle
```

- Verify the installation:
```
truffle version
```

- Install Python for IoT Data Simulation
Ubuntu should already have Python installed, but if not:
```
sudo apt install python3 python3-pip
```

#### 3. Project Setup
Create a directory structure for the project:
```
truffle init
```
Output:

#### 4. Configuring Truffle
In the `truffle-config.js`, configure Truffle to connect to the local blockchain:

#### 5. Launch Ganache:
```
ganache-cli
```

#### 6. Deploy the Smart Contract
Run the following command to compile and deploy the contract:
```
truffle compile
truffle migrate --network development
```
This will deploy the contract to the local blockchain (Ganache). You should see an output showing the contract address.

<img width="883" height="711" alt="Figure 2 - Smart Contract Deployment" src="https://github.com/user-attachments/assets/7b27201a-6045-48c8-a92e-8048e3653b14" />

This output confirms that the `HoneyToken.sol` smart contract is successfully deployed on the local blockchain.

#### 7. Simulate IoT Device Authorization and Unauthorized Access
When you run the simulation script:
```
node src/iot_simulation.js
```
<img width="640" height="58" alt="Figure 3 - Response from the Contract" src="https://github.com/user-attachments/assets/12fda972-fdc5-49ae-8a72-99ac2274195b" />

- Here’s what this output shows:
  - **Device Authorized**: The authorized IoT device (`accounts[1]`) has been successfully added to the list of authorized devices.
  - **Unauthorized Access Detected**: When an unauthorized device (`accounts[2]`) tries to access the honeytoken, the system detects it and logs the attempt.


#### 8. Test Case Output
When you run the tests:
```
truffle test
```

The test output should look like this:

<img width="665" height="312" alt="Figure 4 - Test and Validation" src="https://github.com/user-attachments/assets/cc0aad1e-4d86-487b-b8c8-eaeeae484d73" />

- This confirms that:
  - The smart contract allows the owner to authorize devices.
  - The contract correctly triggers an alert when an unauthorized device accesses the honeytoken.

## Project Structure
```
iot-honeytoken/
│
├── contracts/           # Contains smart contracts
│   └── HoneyToken.sol   # Solidity file for smart contract
├── migrations/          # Deployment scripts
│   └── 2_deploy_contracts.js
├── test/                # Test files for contracts
├── src/                 # IoT Simulation and interaction with smart contract
│   └── iot_simulation.js
├── truffle-config.js    # Truffle configuration
└── package.json         # Node.js dependencies
```

## Published Research


This system was presented at the 2025 International Conference on Computer Sciences, Engineering, and Technology Innovation (ICoCSETI) and published as a research conference paper. Read more here: <br>
<a href="https://ieeexplore.ieee.org/abstract/document/11020086">Smart Contract Honeytoken System using Blockchain for Internet of Things Device Security
</a> <br>
<a href="https://www.researchgate.net/publication/392375179_Smart_Contract_Honeytoken_System_using_Blockchain_for_Internet_of_Things_Device_Security">ResearchGate</a>

## License

This project is licensed under the MIT License.
