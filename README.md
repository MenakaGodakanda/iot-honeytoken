# Smart Contract-based Honeytoken System for IoT Device Security

## 📜 Project Description

This project implements a Smart Contract-based Honeytoken System to enhance the security of IoT devices using blockchain technology. The system deploys Ethereum smart contracts to monitor and detect unauthorized access to honeytokens—dummy IoT data or fake control commands. This innovative approach provides a decentralized, tamper-proof intrusion detection mechanism tailored for IoT environments.

### Key Features:
- **Decentralized Security**: Uses Ethereum blockchain to decentralize the detection mechanism.
- **Honeytokens**: Deploys fake IoT data to attract attackers.
- **Smart Contracts**: Automatically logs and responds to unauthorized access attempts.
- **Tamper-Proof Logs**: Intrusion detection events are stored immutably on the blockchain.

## 🛠️ Technologies and Tools Used

- **Programming Languages**: Solidity, Python, JavaScript (Node.js)
- **Blockchain Platform**: Ethereum (Ganache for local development)
- **Development Frameworks**: Truffle Suite, Web3.js
- **Operating System**: Ubuntu 22.04 LTS
- **Simulation Environment**: Python-based IoT device simulator

## 🚀 Getting Started

Follow these steps to set up and run the project on your local machine.

### Prerequisites

Ensure the following are installed on your system:

- Node.js and npm (Node Package Manager)
- Python 3.x
- Truffle Suite
- Ganache (for local Ethereum blockchain)
- MetaMask (optional, for blockchain interaction in the browser)

### Installation Steps

1. Clone this repository:
```
git clone https://github.com/MenakaGodakanda/honeytoken-iot-security.git
cd honeytoken-iot-security
```

2. Install dependencies:
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

3. Project Setup
Create a directory structure for the project:
```
truffle init
```
Output:

4. Configuring Truffle
In the `truffle-config.js`, configure Truffle to connect to the local blockchain:

5. Launch Ganache:
```
ganache-cli
```

6. Deploy the Smart Contract
Run the following command to compile and deploy the contract:
```
truffle compile
truffle migrate --network development
```
This will deploy the contract to the local blockchain (Ganache). You should see an output showing the contract address.
[Output]

This output confirms that the `HoneyToken.sol` smart contract is successfully deployed on the local blockchain.

7. Testing and Monitoring Honeytokens
Run the Python script to simulate normal IoT activity:
```
python3 simulate_iot.py
```

## 🧪 Testing

Write unit tests for the smart contract in the test/honeytoken_test.js file.
Run the tests using Truffle:

truffle test


Testing 

```
npm install
```

3. Install Python libraries for IoT simulation:
```
pip install -r requirements.txt
```

4. Launch Ganache for a local Ethereum blockchain:

Download Ganache from here.
Start Ganache and note the RPC server (e.g., http://127.0.0.1:7545) and the accounts provided.

5. Compile and deploy the smart contract:
```
truffle compile
truffle migrate --network development
```

6. Update the smart contract address in the Web3.js client script (web3_client.js).


## 📂 Project Structure
```
iot-honeytoken/
│
├── contracts/           # Contains smart contracts
│   └── HoneyToken.sol   # Solidity file for smart contract
│
├── migrations/          # Deployment scripts
│   └── 2_deploy_contracts.js
│
├── test/                # Test files for contracts
│
├── src/                 # IoT Simulation and interaction with smart contract
│   └── iot_simulation.js
│
├── truffle-config.js    # Truffle configuration
│
└── package.json         # Node.js dependencies
```

## 💻 Usage

Run the IoT Simulation: Start the Python-based IoT device simulator:
```
python python/iot_simulator.py
```

Access the Honeytoken via Web3.js: Simulate unauthorized access to the honeytoken by running the Web3.js client:
```
node src/web3_client.js
```

Check Blockchain Logs: View the honeytoken access events in the Ganache transaction log. Logs indicate the address of the unauthorized user and details of the access attempt.



## 📖 Documentation

For detailed implementation steps and theoretical background, refer to the Conference Paper included in the repository.<br>
🔗 References: <br>
<a href="https://ieeexplore.ieee.org/abstract/document/11020086">IEEE</a> <br>
<a href="https://www.researchgate.net/publication/392375179_Smart_Contract_Honeytoken_System_using_Blockchain_for_Internet_of_Things_Device_Security">ResearchGate</a>

## 📜 License

This project is licensed under the MIT License.
