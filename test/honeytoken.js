const HoneyToken = artifacts.require("HoneyToken");

contract("HoneyToken", accounts => {
  it("should allow the owner to authorize a device", async () => {
    const honeyTokenInstance = await HoneyToken.deployed();
    await honeyTokenInstance.authorizeDevice(accounts[1], { from: accounts[0] });

    const isAuthorized = await honeyTokenInstance.authorizedDevices(accounts[1]);
    assert.equal(isAuthorized, true, "Device was not authorized.");
  });

  it("should trigger alert when unauthorized device accesses honeytoken", async () => {
    const honeyTokenInstance = await HoneyToken.deployed();
    
    // Using an unauthorized account to access the HoneyToken
    const result = await honeyTokenInstance.accessHoneyToken({ from: accounts[2] });

    // Check if the event `HoneyTokenAccessed` was emitted
    const event = result.logs.find(log => log.event === 'HoneyTokenAccessed');
    
    assert.ok(event, "HoneyTokenAccessed event was not emitted.");
    assert.equal(event.args.unauthorizedDevice, accounts[2], "The unauthorized device address does not match.");
  });
});
