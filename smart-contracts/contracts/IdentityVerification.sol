
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

contract IdentityVerification {
    mapping(address => bytes32) public identityHashes;

    event IdentityRegistered(address indexed user, bytes32 identityHash);

    function registerIdentity(bytes32 identityHash) public {
        require(identityHashes[msg.sender] == bytes32(0), "Identity already registered.");
        identityHashes[msg.sender] = identityHash;
        emit IdentityRegistered(msg.sender, identityHash);
    }

    function getIdentity(address user) public view returns (bytes32) {
        return identityHashes[user];
    }
}
