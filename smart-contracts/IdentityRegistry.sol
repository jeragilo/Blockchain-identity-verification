// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

contract IdentityRegistry {
    mapping(address => bool) public identities;

    event IdentityRegistered(address indexed user);

    function registerIdentity() public {
        require(!identities[msg.sender], "Identity already registered.");
        identities[msg.sender] = true;
        emit IdentityRegistered(msg.sender);
    }

    function isIdentityRegistered(address _user) public view returns (bool) {
        return identities[_user];
    }
}
