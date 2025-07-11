// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract HoneyToken {
    address public owner;
    mapping(address => bool) public authorizedDevices;
    event HoneyTokenAccessed(address unauthorizedDevice);
    
    constructor() {
        owner = msg.sender;
    }
    
    // Modifier to restrict access to owner only
    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can perform this action");
        _;
    }
    
    // Add a new authorized IoT device
    function authorizeDevice(address device) public onlyOwner {
        authorizedDevices[device] = true;
    }
    
    // Revoke authorization from a device
    function revokeDevice(address device) public onlyOwner {
        authorizedDevices[device] = false;
    }
    
    // Function to simulate accessing IoT data
    function accessHoneyToken() public {
        if (!authorizedDevices[msg.sender]) {
            // Trigger alert when an unauthorized device accesses the honeytoken
            emit HoneyTokenAccessed(msg.sender);
        }
    }
}
