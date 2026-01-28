
"use client"; // Ensures this runs on the client side

import { useState, useEffect } from "react";
import { ethers } from "ethers";
import contractABI from "../constants/contractABI.json";

export default function Home() {
  const [identityHash, setIdentityHash] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  const [contract, setContract] = useState<any>(null);
  const [account, setAccount] = useState<string | null>(null);

  // ✅ Updated Contract Address (Replace old address)
  const contractAddress = "0xCd49D37c12Bc58685388Ff9BE721Ab5700E02908";

  useEffect(() => {
    async function initializeContract() {
      if (typeof window.ethereum !== "undefined") {
        try {
          const provider = new ethers.BrowserProvider(window.ethereum);
          const signer = await provider.getSigner();
          const deployedContract = new ethers.Contract(contractAddress, contractABI.abi, signer);
          setContract(deployedContract);
          console.log("✅ Contract Loaded:", deployedContract);
        } catch (error) {
          console.error("❌ Error initializing contract:", error);
          setStatus("❌ Error initializing contract.");
        }
      } else {
        setStatus("❌ MetaMask not detected.");
      }
    }

    initializeContract();
  }, []);

  async function connectWallet() {
    try {
      if (!window.ethereum) throw new Error("MetaMask is required");
      const provider = new ethers.BrowserProvider(window.ethereum);
      const accounts = await provider.send("eth_requestAccounts", []);
      setAccount(accounts[0]);
      setStatus(`✅ Wallet connected: ${accounts[0]}`);
    } catch (error) {
      console.error("❌ Error connecting wallet:", error);
      setStatus("❌ Error connecting wallet.");
    }
  }

  async function registerIdentity() {
    if (!identityHash.trim()) return setStatus("❌ Enter an identity hash.");
    if (!contract) return setStatus("❌ Smart contract not loaded.");
    if (!account) return setStatus("❌ Connect wallet first.");

    try {
      const signer = await new ethers.BrowserProvider(window.ethereum).getSigner();
      const contractWithSigner = contract.connect(signer);
      
      const identityHashBytes = ethers.keccak256(ethers.toUtf8Bytes(identityHash)); // ✅ Correct hash format

      console.log("🔍 Identity Hash:", identityHashBytes);
      console.log("🔍 Wallet Address:", account);

      // ✅ Register Identity transaction
      const tx = await contractWithSigner.registerIdentity(identityHashBytes);
      await tx.wait();

      setStatus("✅ Identity Registered!");
    } catch (error: any) {
      console.error("❌ Error Registering Identity:", error);
      setStatus("❌ Transaction failed.");
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-4xl font-bold mb-4">🔒 Blockchain Identity Verification</h1>
      <p className="text-lg mb-6">Securely register your identity on Ethereum</p>

      {!account ? (
        <button
          onClick={connectWallet}
          className="px-4 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-700 mb-4"
        >
          Connect Wallet
        </button>
      ) : (
        <p className="text-sm text-gray-700 mb-4">Connected: {account}</p>
      )}

      <input
        type="text"
        placeholder="Enter your identity hash"
        className="border p-2 mb-4 w-80"
        onChange={(e) => setIdentityHash(e.target.value)}
      />
      <button
        onClick={registerIdentity}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-700"
      >
        Register Identity
      </button>

      <p className="mt-4">{status}</p>
    </div>
  );
}
